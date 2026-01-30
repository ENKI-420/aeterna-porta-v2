"use client"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Atom, Zap, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Background effects */}
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

        <p className="mb-4 text-xl font-medium text-accent">
          Quantum Zeno Stabilized Wormhole Experiment
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-pretty text-muted-foreground">
          A Five-Stage quantum computing experiment implementing Einstein-Rosen bridges
          with Thermofield Double states, stroboscopic weak measurements, and Floquet
          drives for traversable wormhole simulation.
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
            <div className="text-3xl font-bold text-secondary">51.843°</div>
            <div className="text-sm text-muted-foreground">Lenoir Angle</div>
          </div>
        </div>
      </div>
    </section>
  )
}
