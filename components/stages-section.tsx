import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link2, Eye, Radio, Cpu, BarChart3 } from "lucide-react"

const stages = [
  {
    number: 1,
    title: "TFD Preparation",
    subtitle: "ER Bridge",
    icon: Link2,
    description: "Creates Einstein-Rosen bridge using Thermofield Double state",
    details: [
      { label: "Gates", value: "H → RY(θ_lock) → CX" },
      { label: "Qubits", value: "50 entangled pairs (L ↔ R)" },
      { label: "Constant", value: "θ_lock = 51.843°" },
    ],
  },
  {
    number: 2,
    title: "Quantum Zeno Monitoring",
    subtitle: "State Freeze",
    icon: Eye,
    description: "Stroboscopic weak measurements freeze the wormhole state",
    details: [
      { label: "Rate", value: "κ = 1 MHz" },
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
      { label: "Gates", value: "X (bit flip) + RZ(θ_lock)" },
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

export function StagesSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Five-Stage Protocol</h2>
          <p className="text-muted-foreground">
            Sequential quantum operations for wormhole stabilization
          </p>
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
