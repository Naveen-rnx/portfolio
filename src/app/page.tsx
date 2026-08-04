const projects = [
  {
    height: "0x01",
    name: "Lottery dApp",
    desc: "A trustless lottery smart contract in Solidity — 0.1 ETH entry, 3-participant minimum, keccak256-based winner selection. Deployed to Sepolia testnet and paired with a React + ethers.js v6 frontend with live prize pool, participants list, round tracking and Etherscan links.",
    tags: ["Solidity", "Ethers.js", "React", "Vite", "MetaMask", "Sepolia"],
    live: "https://lottery-dapp-ruby-omega.vercel.app",
    github: "https://github.com/Naveen-rnx/lottery-dapp",
  },
  {
    height: "0x02",
    name: "ERC-20 Token dApp (MKBA)",
    desc: "A custom ERC-20 token built with OpenZeppelin — mint, burn, and transfer with owner-only controls. Next.js 16 dashboard with wagmi v2 + viem for live token balance, total supply tracking and real-time transaction status with Etherscan links.",
    tags: ["Solidity", "ERC-20", "OpenZeppelin", "Next.js", "wagmi", "viem", "Hardhat 3"],
    live: "https://erc20-dapp-drab.vercel.app",
    github: "https://github.com/Naveen-rnx/erc20-dapp",
  },
  {
    height: "0x03",
    name: "MNFT Collection (ERC-721)",
    desc: "A 100-NFT ERC-721 minting contract with 0.001 ETH mint price, max 3 per wallet and owner controls for enabling/pausing minting and withdrawing ETH. Next.js minting frontend with live mint counter, progress bar and owner panel.",
    tags: ["Solidity", "ERC-721", "OpenZeppelin", "Next.js", "wagmi", "viem", "Hardhat 3"],
    live: "https://nft-frontend-hazel.vercel.app",
    github: "https://github.com/Naveen-rnx/nft-frontend",
  },
];

const skills = {
  "Smart Contracts": ["Solidity", "ERC-20 / ERC-721", "OpenZeppelin", "Hardhat 3", "Remix IDE", "Sepolia Testnet"],
  "Frontend / Web3": ["React", "Next.js", "wagmi v2", "viem", "Ethers.js", "Tailwind CSS"],
  "Languages": ["C++ (Primary)", "JavaScript", "Python", "C", "Solidity"],
  "Tools & Cloud": ["Git", "GitHub", "Vercel", "MetaMask", "AWS Cloud Practitioner ✓", "AWS Data Engineer ✓"],
  "Core / DSA": ["Data Structures", "Algorithms", "LeetCode — 236 solved", "GFG — 173 solved"],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-accent">
            0x_NAVEEN
          </a>
          <div className="hidden gap-8 font-mono text-xs text-muted sm:flex">
            <a href="#projects" className="transition-colors hover:text-text">
              projects
            </a>
            <a href="#skills" className="transition-colors hover:text-text">
              skills
            </a>
            <a href="#contact" className="transition-colors hover:text-text">
              contact
            </a>
          </div>
          <a
            href="https://github.com/Naveen-rnx"
            className="rounded border border-line px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero — genesis block */}
        <section className="py-20 sm:py-28">
          <div className="rounded-xl border border-line bg-surface/60 p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 font-mono text-xs text-muted">
              <span>BLOCK #0000000 — GENESIS</span>
              <span className="flex items-center gap-2 text-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                CONFIRMED
              </span>
            </div>

            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.1] sm:text-6xl">
              Naveen Kumar
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
              Blockchain Developer & Web3 Builder — writing smart contracts and
              the interfaces that talk to them.
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              B.Tech CSE (AI & ML) — KIET Group of Institutions, Ghaziabad | 3rd Year
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 font-mono text-xs text-muted sm:grid-cols-4">
              <div>
                <div className="text-text">3</div>
                <div>dApps shipped</div>
              </div>
              <div>
                <div className="text-text">Solidity</div>
                <div>primary chain lang</div>
              </div>
              <div>
                <div className="text-text">236</div>
                <div>LeetCode solved</div>
              </div>
              <div>
                <div className="text-text">AWS ×2</div>
                <div>certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects — chained blocks */}
        <section id="projects" className="py-16 sm:py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Project Chain
            </h2>
            <span className="font-mono text-xs text-muted">
              {projects.length} blocks mined
            </span>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[27px] top-4 bottom-4 hidden w-px bg-line sm:block"
            />
            <div className="flex flex-col gap-6">
              {projects.map((p) => (
                <article
                  key={p.height}
                  className="relative rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-accent-dim sm:pl-20"
                >
                  <div className="absolute left-6 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-2 font-mono text-[11px] text-accent sm:flex">
                    {p.height}
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs text-muted sm:hidden">
                        {p.height}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-text">
                        {p.name}
                      </h3>
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-amber">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                      CONFIRMED
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-4 font-mono text-xs">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-opacity hover:opacity-80"
                    >
                      Live ↗
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-text"
                    >
                      Source ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 sm:py-20">
          <h2 className="font-display mb-10 text-2xl font-semibold sm:text-3xl">
            Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-xl border border-line bg-surface/50 p-5"
              >
                <div className="font-mono text-xs uppercase tracking-wide text-accent">
                  {group}
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text"
                    >
                      <span className="text-amber">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20">
          <h2 className="font-display mb-10 text-2xl font-semibold sm:text-3xl">
            Stats
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-line bg-surface/50 p-5 text-center">
              <div className="font-mono text-3xl font-bold text-accent">236</div>
              <div className="mt-1 font-mono text-xs text-muted">LeetCode solved</div>
              <div className="mt-1 font-mono text-[11px] text-muted">104E / 119M / 13H</div>
            </div>
            <div className="rounded-xl border border-line bg-surface/50 p-5 text-center">
              <div className="font-mono text-3xl font-bold text-accent">173</div>
              <div className="mt-1 font-mono text-xs text-muted">GFG solved</div>
              <div className="mt-1 font-mono text-[11px] text-muted">Score: 550</div>
            </div>
            <div className="rounded-xl border border-line bg-surface/50 p-5 text-center">
              <div className="font-mono text-3xl font-bold text-accent">3</div>
              <div className="mt-1 font-mono text-xs text-muted">dApps deployed</div>
              <div className="mt-1 font-mono text-[11px] text-muted">Sepolia Testnet</div>
            </div>
            <div className="rounded-xl border border-line bg-surface/50 p-5 text-center">
              <div className="font-mono text-3xl font-bold text-accent">2</div>
              <div className="mt-1 font-mono text-xs text-muted">AWS certifications</div>
              <div className="mt-1 font-mono text-[11px] text-muted">CCP + Data Engineer</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="rounded-xl border border-line bg-surface/60 p-8 text-center sm:p-14">
            <div className="font-mono text-xs text-muted">
              BLOCK #FFFFFFFF — REACH OUT
            </div>
            <h2 className="font-display mt-4 text-2xl font-semibold sm:text-4xl">
              Let&apos;s build something on-chain.
            </h2>
            <p className="mt-3 text-muted">
              Open to internships and collaboration in Web3 and smart
              contract development.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
              <a
                href="https://github.com/Naveen-rnx"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:naveen852963@gmail.com"
                className="rounded-lg border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                naveen852963@gmail.com
              </a>
              <span className="rounded-lg border border-dashed border-line px-5 py-2.5 text-muted">
                LinkedIn — coming soon
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Naveen Kumar</span>
          <span>built with Next.js — chain of blocks, not templates</span>
        </div>
      </footer>
    </div>
  );
}
