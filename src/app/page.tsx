'use client';

import { useState, useEffect } from 'react';
import { createPublicClient, http, formatEther } from 'viem';
import { sepolia } from 'viem/chains';
import { ExternalLink, Mail, CheckCircle2, Activity } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EventTicker from "@/components/EventTicker";

// Sepolia Public RPC Client
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

// Real Deployed Contract Addresses from your live projects
const PROJECTS = [
  {
    id: '0x01',
    hash: '0x7f8a...b92c',
    title: 'Lottery dApp',
    description: 'A trustless lottery smart contract in Solidity...',
    tags: ['Solidity', 'Ethers.js', 'React', 'Vite', 'MetaMask', 'Sepolia'],
    liveUrl: 'https://lottery-dapp-ruby-omega.vercel.app',
    githubUrl: 'https://github.com/Naveen-rnx/lottery-dapp',
    contractAddress: (process.env.NEXT_PUBLIC_LOTTERY_ADDRESS || '0x0000000000000000000000000000000000000000') as `0x${string}`,
  },
  {
    id: '0x02',
    hash: '0x3e1f...d44a',
    title: 'ERC-20 Token dApp (MKBA)',
    description: 'A custom ERC-20 token built with OpenZeppelin...',
    tags: ['Solidity', 'ERC-20', 'OpenZeppelin', 'Next.js', 'wagmi', 'viem', 'Hardhat 3'],
    liveUrl: 'https://erc20-dapp-drab.vercel.app',
    githubUrl: 'https://github.com/Naveen-rnx/erc20-dapp',
    contractAddress: (process.env.NEXT_PUBLIC_ERC20_ADDRESS || '0x0000000000000000000000000000000000000000') as `0x${string}`,
  },
  {
    id: '0x03',
    hash: '0x9a4c...e810',
    title: 'MNFT Collection (ERC-721)',
    description: 'A 100-NFT ERC-721 minting contract...',
    tags: ['Solidity', 'ERC-721', 'OpenZeppelin', 'Next.js', 'wagmi', 'viem', 'Hardhat 3'],
    liveUrl: 'https://nft-frontend-hazel.vercel.app',
    githubUrl: 'https://github.com/Naveen-rnx/nft-frontend',
    contractAddress: (process.env.NEXT_PUBLIC_NFT_ADDRESS || '0x0000000000000000000000000000000000000000') as `0x${string}`,
  },
];

// Live Sepolia Contract Tracker Component
function LiveContractTracker({ address }: { address: `0x${string}` }) {
  const [txCount, setTxCount] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOnChainData() {
      if (address === '0x0000000000000000000000000000000000000000') {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const count = await publicClient.getTransactionCount({ address });
        const rawBal = await publicClient.getBalance({ address });
        setTxCount(count);
        setBalance(formatEther(rawBal));
      } catch (err) {
        console.error('Failed to fetch contract data:', err);
      } finally {
        setLoading(false);
      }
    }
    getOnChainData();
  }, [address]);

  return (
    <div className="mt-4 p-3 bg-zinc-950/70 rounded-lg border border-zinc-800/80 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-zinc-400">Sepolia Network:</span>
      </div>

      {loading ? (
        <span className="text-zinc-500 animate-pulse">Querying block node...</span>
      ) : txCount !== null ? (
        <div className="flex gap-4 text-zinc-300">
          <span>Txs: <strong className="text-emerald-400">{txCount}</strong></span>
          <span>Balance: <strong className="text-emerald-400">{Number(balance).toFixed(4)} ETH</strong></span>
        </div>
      ) : (
        <span className="text-zinc-500">Live testnet node active</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/60">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
          <a href="#top" className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            0x_NAVEEN
          </a>
          <div className="flex gap-6 text-zinc-400">
            <a href="#projects" className="hover:text-emerald-400 transition-colors">projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">contact</a>
          </div>
          <a
            href="https://github.com/Naveen-rnx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        {/* Live Event Stream Ticker */}
        <EventTicker />
        {/* Genesis Block Section */}
        <section id="top" className="space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
            <span>BLOCK #0000000 — GENESIS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CONFIRMED</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Naveen Kumar
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Blockchain Developer & Web3 Builder — writing smart contracts and the interfaces that talk to them.
          </p>
          
          <p className="font-mono text-sm text-zinc-500">
            B.Tech CSE (AI & ML) — KIET Group of Institutions, Ghaziabad | 3rd Year
          </p>

          <div className="flex gap-4 font-mono text-sm pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400">3</div>
              <div className="text-xs text-zinc-400 mt-1">dApps shipped</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400">Solidity</div>
              <div className="text-xs text-zinc-400 mt-1">primary chain lang</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400">306</div>
              <div className="text-xs text-zinc-400 mt-1">LeetCode solved</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-2xl font-bold font-mono text-emerald-400">AWS ×2</div>
              <div className="text-xs text-zinc-400 mt-1">certified</div>
            </div>
          </div>
        </section>

        {/* Project Chain Section with Connected Blocks */}
        <section id="projects" className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-bold font-mono text-white">Project Chain</h2>
            <span className="font-mono text-xs text-emerald-400">3 blocks mined</span>
          </div>

          {/* Connected Vertical Chain Layout */}
          <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="relative bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-6 shadow-xl hover:border-emerald-500/40 transition-all duration-300 group"
              >
                {/* Visual Node Dot on the Chain Line */}
                <div className="absolute -left-[31px] md:-left-[39px] top-7 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-[0_0_10px_#10b981] group-hover:scale-125 transition-transform" />

                {/* Block Header Info */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{project.id}</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-400">{project.title}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                    ● CONFIRMED
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-zinc-800/90 text-zinc-300 px-2.5 py-1 rounded border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 font-mono text-sm border-t border-zinc-800/60 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Live <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    Source <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Live Sepolia Node Tracker */}
                <LiveContractTracker address={project.contractAddress} />
              </article>
            ))}
          </div>
        </section>

        {/* Stack & Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-bold font-mono text-white border-b border-zinc-800 pb-4">
            Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Smart Contracts', items: ['Solidity', 'ERC-20 / ERC-721', 'OpenZeppelin', 'Hardhat 3', 'Remix IDE', 'Sepolia Testnet'] },
              { category: 'Frontend / Web3', items: ['React', 'Next.js', 'wagmi v2', 'viem', 'Ethers.js', 'Tailwind CSS'] },
              { category: 'Languages', items: ['C++ (Primary)', 'JavaScript', 'Python', 'C', 'Solidity'] },
              { category: 'Tools & Cloud', items: ['Git', 'GitHub', 'Vercel', 'MetaMask', 'AWS Cloud Practitioner', 'AWS Data Engineer'] },
              { category: 'Core / DSA', items: ['Data Structures', 'Algorithms', 'LeetCode — 306 solved', 'GFG — 220 solved'] },
            ].map((col) => (
              <div key={col.category} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                <h3 className="text-sm font-mono font-bold text-emerald-400">{col.category}</h3>
                <ul className="space-y-2 text-sm text-zinc-300 font-mono">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold font-mono text-white border-b border-zinc-800 pb-4">
            Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-3xl font-bold font-mono text-emerald-400">306</div>
              <div className="text-xs font-mono text-zinc-300 mt-1">LeetCode solved</div>
              <div className="text-[10px] font-mono text-zinc-500 mt-2">130E / 152M / 24H</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-3xl font-bold font-mono text-emerald-400">220</div>
              <div className="text-xs font-mono text-zinc-300 mt-1">GFG solved</div>
              <div className="text-[10px] font-mono text-zinc-500 mt-2">Score: 748</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-3xl font-bold font-mono text-emerald-400">3</div>
              <div className="text-xs font-mono text-zinc-300 mt-1">dApps deployed</div>
              <div className="text-[10px] font-mono text-zinc-500 mt-2">Sepolia Testnet</div>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-3xl font-bold font-mono text-emerald-400">2</div>
              <div className="text-xs font-mono text-zinc-300 mt-1">AWS certifications</div>
              <div className="text-[10px] font-mono text-zinc-500 mt-2">CCP + Data Engineer</div>
            </div>
          </div>
        </section>

        {/* Contact / Terminal Footer Block */}
        <section id="contact" className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 text-center space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
            BLOCK #FFFFFFFF — REACH OUT
          </div>
          <h2 className="text-3xl font-bold text-white">Let's build something on-chain.</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Open to internships and collaboration in Web3 and smart contract development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-sm pt-2">
            <a
              href="https://github.com/Naveen-rnx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="w-4 h-4" /> GitHub ↗
            </a>
            <a
              href="mailto:naveen852963@gmail.com"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" /> naveen852963@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-rnx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" /> LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/60 py-8 text-center font-mono text-xs text-zinc-500">
        <p>© 2026 Naveen Kumar — built with Next.js — chain of blocks, not templates</p>
      </footer>
    </div>
  );
}