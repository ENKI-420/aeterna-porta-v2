"use client"

import { Atom, Zap, Activity, Clock, Grid3X3, ArrowLeftRight, Sparkles, Link2, Eye, Radio, Cpu, BarChart3, CheckCircle2, FileCode, Terminal, BookOpen } from "lucide-react"

/* ─── Inline UI primitives ─── */

function Badge({
  className = "",
  children,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  const v: Record<string, string> = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "text-foreground",
  }
  return <div className={`${base} ${v[variant] ?? v.default} ${className}`} {...props}>{children}</div>
}

function Button({
  className = "",
  children,
  variant = "default",
  size = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }) {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  const v: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }
  const s: Record<string, string> = { default: "h-10 px-4 py-2", lg: "h-11 rounded-md px-8" }
  return <button className={`${base} ${v[variant] ?? v.default} ${s[size] ?? s.default} ${className}`} {...props}>{children}</button>
}

function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>{children}</div>
}
function CardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>
}
function CardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>{children}</div>
}
function CardDescription({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-sm text-muted-foreground ${className}`} {...props}>{children}</div>
}
function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>
}

/* ─── Data ─── */

const discoveries = [
  {
    title: "Negative Shapiro Delay",
    formula: "t < 0",
    icon: Clock,
    description: "Information exits the wormhole before it could classically traverse",
    metrics: [
      { label: "Baseline", value: "+5.2 ns" },
      { label: "With Zeno", value: "-2.3 ns" },
      { label: "Difference", value: "7.5 ns earlier" },
    ],
    significance: "p = 0.003",
    color: "text-primary",
  },
  {
    title: "Area-Law Entropy",
    formula: "S2(A) ~ c|dA|",
    icon: Grid3X3,
    description: "Entanglement concentrated at the event horizon (holographic principle)",
    metrics: [
      { label: "Scaling", value: "Area, not volume" },
      { label: "Boundary", value: "dA horizon" },
      { label: "Constant", value: "c coefficient" },
    ],
    significance: "p = 0.012",
    color: "text-accent",
  },
  {
    title: "Non-Reciprocal Flow",
    formula: "J_LR/J_RL != 1",
    icon: ArrowLeftRight,
    description: "Breaking detailed balance - time-reversal violation",
    metrics: [
      { label: "Baseline", value: "1.02 (symmetric)" },
      { label: "With Zeno", value: "1.34 (asymmetric)" },
      { label: "Asymmetry", value: "32% difference" },
    ],
    significance: "p < 0.001",
    color: "text-secondary",
  },
  {
    title: "Negentropic Efficiency",
    formula: "Xi = (Lambda x Phi) / Gamma",
    icon: Sparkles,
    description: "Quantum wormhole outperforms classical copper wire by 127x",
    metrics: [
      { label: "Baseline Xi", value: "3.6" },
      { label: "Zeno Xi", value: "127.4" },
      { label: "Improvement", value: "35x gain" },
    ],
    significance: "p < 0.001",
    color: "text-primary",
  },
]

const stages = [
  {
    number: 1,
    title: "TFD Preparation",
    subtitle: "ER Bridge",
    icon: Link2,
    description: "Creates Einstein-Rosen bridge using Thermofield Double state",
    details: [
      { label: "Gates", value: "H, RY, CX" },
      { label: "Qubits", value: "50 entangled pairs" },
      { label: "Constant", value: "51.843 deg" },
    ],
  },
  {
    number: 2,
    title: "Quantum Zeno Monitoring",
    subtitle: "State Freeze",
    icon: Eye,
    description: "Stroboscopic weak measurements freeze the wormhole state",
    details: [
      { label: "Rate", value: "1 MHz" },
      { label: "Cycles", value: "100 measurement cycles" },
      { label: "Gates", value: "CRY + MEASURE + RESET" },
    ],
  },
  {
    number: 3,
    title: "Floquet Drive",
    subtitle: "Pilot-Wave Injection",
    icon: Radio,
    description: "Periodic modulation keeps the wormhole traversable",
    details: [
      { label: "Frequency", value: "1 GHz microwave" },
      { label: "Amplitude", value: "0.5 rad" },
      { label: "Throat", value: "10 qubits at L-R boundary" },
    ],
  },
  {
    number: 4,
    title: "Dynamic Feed-Forward",
    subtitle: "Real-Time Correction",
    icon: Cpu,
    description: "Classical corrections based on mid-circuit measurements",
    details: [
      { label: "Latency", value: "<300ns" },
      { label: "Gates", value: "X (bit flip) + RZ" },
      { label: "Mode", value: "Real-time feedback" },
    ],
  },
  {
    number: 5,
    title: "Full Readout",
    subtitle: "Measurement",
    icon: BarChart3,
    description: "Final measurement on all 120 qubits",
    details: [
      { label: "Shots", value: "100,000" },
      { label: "Precision", value: "High statistics" },
      { label: "Output", value: "All 120 qubits" },
    ],
  },
]

const projectFiles = [
  { name: "deploy_aeterna_porta_v2_ibm_nighthawk.py", purpose: "Main deployment script", icon: FileCode },
  { name: "QUICK_DEPLOY.sh", purpose: "Interactive deployment wrapper", icon: Terminal },
  { name: "deploy_aeterna_porta_v2_SWEEP.py", purpose: "Parameter sweep deployment", icon: FileCode },
  { name: "DEPLOYMENT_STATUS.md", purpose: "System verification summary", icon: BookOpen },
]

const requirements = [
  "IBM Quantum Account with valid token",
  "ibm_fez backend access (156 qubits)",
  "Python 3.10+ with qiskit-ibm-runtime",
  "Network connectivity for job submission",
]

/* ─── Sections ─── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl text-center">
        <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
          <Activity className="mr-1.5 h-3 w-3" />
          Ready for IBM Quantum Deployment
        </Badge>
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-primary">AETERNA-PORTA</span>{" "}
          <span className="text-muted-foreground">v2.0</span>
        </h1>
        <p className="mb-4 text-xl font-medium text-accent">Quantum Zeno Stabilized Wormhole Experiment</p>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-muted-foreground">
          A Five-Stage quantum computing experiment implementing Einstein-Rosen bridges with Thermofield Double
          states, stroboscopic weak measurements, and Floquet drives for traversable wormhole simulation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="quantum-glow">
            <Zap className="mr-2 h-4 w-4" />
            Deploy to IBM Quantum
          </Button>
          <Button size="lg" variant="outline">
            <Atom className="mr-2 h-4 w-4" />
            View Circuit
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">120</div>
            <div className="text-sm text-muted-foreground">Qubits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">100K</div>
            <div className="text-sm text-muted-foreground">Shots</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">{"51.843\u00B0"}</div>
            <div className="text-sm text-muted-foreground">Lenoir Angle</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StagesSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Five-Stage Protocol</h2>
          <p className="text-muted-foreground">Sequential quantum operations for wormhole stabilization</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <Card key={stage.number} className="quantum-border">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <Badge variant="secondary" className="h-8 w-8 justify-center rounded-full p-0">
                    {stage.number}
                  </Badge>
                  <stage.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{stage.title}</CardTitle>
                <CardDescription className="text-accent">{stage.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{stage.description}</p>
                <div className="space-y-2">
                  {stage.details.map((detail) => (
                    <div key={detail.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="font-mono text-foreground">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiscoveriesSection() {
  return (
    <section className="bg-card/50 px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Expected Discoveries</h2>
          <p className="text-muted-foreground">Predicted experimental outcomes demonstrating quantum wormhole phenomena</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {discoveries.map((discovery) => (
            <Card key={discovery.title} className="quantum-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <discovery.icon className={`h-6 w-6 ${discovery.color}`} />
                    <div>
                      <CardTitle className="text-lg">{discovery.title}</CardTitle>
                      <code className={`font-mono text-sm ${discovery.color}`}>{discovery.formula}</code>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">{discovery.significance}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{discovery.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {discovery.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-mono text-sm font-medium">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatusSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <CheckCircle2 className="mr-1.5 h-3 w-3" />
            System Ready
          </Badge>
          <h2 className="mb-4 text-3xl font-bold">Deployment Status</h2>
          <p className="text-muted-foreground">{"Framework: dna::{}{} ::lang v51.843"}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="quantum-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                Project Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projectFiles.map((file) => (
                  <div key={file.name} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <file.icon className="h-4 w-4 text-muted-foreground" />
                      <code className="text-sm">{file.name}</code>
                    </div>
                    <span className="text-xs text-muted-foreground">{file.purpose}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="quantum-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((req) => (
                  <div key={req} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-muted/50 p-4">
                <p className="mb-2 text-sm font-medium">Quick Start Command</p>
                <code className="block rounded bg-background px-3 py-2 font-mono text-sm text-primary">
                  ~/.osiris/quantum/QUICK_DEPLOY.sh
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Circuit partition: L=50q, R=50q, Anc=20q | Total: 120 qubits | Backend: ibm_fez</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StagesSection />
      <DiscoveriesSection />
      <StatusSection />
    </main>
  )
}
