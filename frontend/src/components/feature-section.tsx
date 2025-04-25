import { BrainCircuit, Sparkles, BarChart3, Coins, Shield, Database } from "lucide-react"

export default function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-zinc-800/80 px-3 py-1 text-sm">
              <Sparkles className="mr-1 h-4 w-4" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Revolutionize Your Meditation Practice
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              MindWave combines cutting-edge neurofeedback technology with blockchain rewards to create a unique
              meditation experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Muse Integration</h3>
            <p className="text-center text-zinc-400">
              Seamlessly connect your Muse meditation device to track your brainwave activity in real-time.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-time Analytics</h3>
            <p className="text-center text-zinc-400">
              Visualize your meditation progress with beautiful, intuitive charts and data visualizations.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">NFT Rewards</h3>
            <p className="text-center text-zinc-400">
              Earn unique NFTs on the Sui blockchain when you achieve meditation milestones.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure zkLogin</h3>
            <p className="text-center text-zinc-400">
              Access your account securely with zero-knowledge proof authentication.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Data Marketplace</h3>
            <p className="text-center text-zinc-400">
              Opt-in to sell your anonymized meditation data for additional NFT rewards.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm">
            <div className="rounded-full bg-primary/20 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Gamified Experience</h3>
            <p className="text-center text-zinc-400">
              Level up your meditation practice with challenges, achievements, and rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
