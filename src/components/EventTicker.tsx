"use client";

import { useEffect, useState } from "react";
import { createPublicClient, http, parseAbiItem } from "viem";
import { sepolia } from "viem/chains";

// Define event shape
interface TxLog {
  id: string;
  blockNumber: string;
  transactionHash: string;
  formattedHash: string;
}

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(), // Uses public Sepolia RPC endpoint
});

export default function EventTicker() {
  const [logs, setLogs] = useState<TxLog[]>([]);
  const [status, setStatus] = useState<"connecting" | "live">("connecting");

  useEffect(() => {
    // 1. Fetch recent Transfer logs on mount for immediate data
    const fetchRecentLogs = async () => {
      try {
        const currentBlock = await publicClient.getBlockNumber();
        const pastLogs = await publicClient.getLogs({
          event: parseAbiItem(
            "event Transfer(address indexed from, address indexed to, uint256 value)"
          ),
          fromBlock: currentBlock - BigInt(100), // Scan last 100 blocks
          toBlock: currentBlock,
        });

        const initialLogs: TxLog[] = pastLogs.slice(-5).map((log, index) => ({
          id: `${log.transactionHash}-${index}`,
          blockNumber: log.blockNumber ? log.blockNumber.toString() : "Pending",
          transactionHash: log.transactionHash || "",
          formattedHash: log.transactionHash
            ? `${log.transactionHash.slice(0, 6)}...${log.transactionHash.slice(-4)}`
            : "0x...",
        }));

        setLogs(initialLogs);
        setStatus("live");
      } catch (err) {
        console.error("Failed to fetch initial Sepolia logs:", err);
      }
    };

    fetchRecentLogs();

    // 2. Poll for new blocks/events periodically
    const interval = setInterval(async () => {
      try {
        const currentBlock = await publicClient.getBlockNumber();
        const latestLogs = await publicClient.getLogs({
          event: parseAbiItem(
            "event Transfer(address indexed from, address indexed to, uint256 value)"
          ),
          fromBlock: currentBlock - BigInt(5),
          toBlock: currentBlock,
        });

        if (latestLogs.length > 0) {
          const newEntry: TxLog = {
            id: `${latestLogs[0].transactionHash}-${Date.now()}`,
            blockNumber: currentBlock.toString(),
            transactionHash: latestLogs[0].transactionHash || "",
            formattedHash: `${latestLogs[0].transactionHash.slice(0, 6)}...${latestLogs[0].transactionHash.slice(-4)}`,
          };

          setLogs((prev) => [newEntry, ...prev.slice(0, 4)]);
        }
      } catch (err) {
        // Silently catch rate-limits on public RPC
      }
    }, 12000); // Poll every 12s (average Sepolia block time)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/80 border border-green-500/30 rounded-lg p-3 font-mono text-xs text-green-400 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)] my-6">
      <div className="flex items-center justify-between border-b border-green-500/20 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="font-bold tracking-wider uppercase text-green-300">
            Sepolia Live Event Stream
          </span>
        </div>
        <span className="text-gray-500">
          [{status === "live" ? "NODE CONNECTED" : "INITIALIZING..."}]
        </span>
      </div>

      <div className="space-y-1">
        {logs.length === 0 ? (
          <div className="text-gray-500 italic">Listening for on-chain events...</div>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between hover:bg-green-500/10 p-1 rounded transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Block #{log.blockNumber}</span>
                <span className="text-green-500">➔</span>
                <span className="text-gray-300">Transfer Event Detected</span>
              </div>
              <a
                href={`https://sepolia.etherscan.io/tx/${log.transactionHash}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 underline hover:text-green-300 font-bold"
              >
                {log.formattedHash}
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}