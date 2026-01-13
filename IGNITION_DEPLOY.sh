#!/usr/bin/env bash
#═══════════════════════════════════════════════════════════════════════════════
# AETERNA-PORTA v2.1 IGNITION DEPLOYMENT
# Framework: dna::}{::lang v51.843
# Status: Parameter-tuned for Φ threshold crossing
#═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m'

echo "═══════════════════════════════════════════════════════════════════════════════"
echo -e " ${MAGENTA}🔥 AETERNA-PORTA v2.1 — IGNITION SEQUENCE${NC}"
echo " Framework: dna::}{::lang v51.843"
echo "═══════════════════════════════════════════════════════════════════════════════"
echo ""

# Previous results banner
echo -e "${CYAN}PREVIOUS RESULTS (v2.0 — Job d57e21onsj9s73b4lvug):${NC}"
echo "  Φ (Consciousness): 0.095 ❌ (target: > 0.7734)"
echo "  Ξ (Efficiency): 0.858 ❌ (target: > 127.4)"
echo "  Γ (Decoherence): 0.1 ✅"
echo "  Status: STABLE but SUB-THRESHOLD (throat closed)"
echo ""

echo -e "${MAGENTA}IGNITION UPGRADES (v2.0 → v2.1):${NC}"
echo "  ✓ Floquet Amplitude: 0.5 → 0.7734 (matched to Φ threshold)"
echo "  ✓ Zeno Frequency: 1.0 MHz → 1.25 MHz (tighter coherence)"
echo "  ✓ THETA_LOCK Integration: Explicit Z-rotation mapping (51.843°)"
echo ""

# Check IBM Quantum credentials
echo -e "${CYAN}[1/4]${NC} Checking IBM Quantum credentials..."
if python3 -c "from qiskit_ibm_runtime import QiskitRuntimeService; QiskitRuntimeService().active_account()" >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} IBM Quantum credentials verified"
else
    echo -e "${RED}✗${NC} IBM Quantum credentials not configured"
    echo ""
    echo "Setup:"
    echo "  export QISKIT_IBM_TOKEN='YOUR_TOKEN_HERE'"
    echo "  Or run:"
    echo "  python3 << EOF"
    echo "  from qiskit_ibm_runtime import QiskitRuntimeService"
    echo "  QiskitRuntimeService.save_account("
    echo "      channel='ibm_quantum',"
    echo "      token='YOUR_TOKEN_HERE',"
    echo "      overwrite=True"
    echo "  )"
    echo "  EOF"
    echo ""
    echo "Get token from: https://quantum.ibm.com/account"
    exit 1
fi

echo ""
echo -e "${CYAN}[2/4]${NC} Backend preference: ibm_fez (156q) > ibm_torino (133q)"
echo ""

# Confirmation prompt
echo -e "${YELLOW}⚠️  DEPLOYMENT CONFIRMATION${NC}"
echo ""
echo "  Experiment: AETERNA-PORTA v2.1 IGNITION"
echo "  Qubits: 120 (L=50, R=50, Anc=20)"
echo "  Shots: 100,000"
echo "  Backend: Auto-select (ibm_fez preferred)"
echo ""
echo "  🎯 TARGET METRICS:"
echo "    Φ (Consciousness): > 0.7734 (v2.0: 0.095)"
echo "    Ξ (Efficiency): > 127.4 (v2.0: 0.858)"
echo ""
echo "  This deployment will consume IBM Quantum credits."
echo ""

read -p "Deploy IGNITION sequence? [y/N]: " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Deployment cancelled.${NC}"
    exit 0
fi

echo ""
echo -e "${CYAN}[3/4]${NC} Deploying AETERNA-PORTA v2.1 IGNITION..."
echo ""

# Deploy
python3 ~/.osiris/quantum/deploy_aeterna_porta_v2_IGNITION.py

echo ""
echo -e "${CYAN}[4/4]${NC} Deployment complete!"
echo ""

# Check for results
LATEST_RESULT=$(ls -t ~/.osiris/evidence/quantum/aeterna_porta_v2.1_ignition_*.json 2>/dev/null | head -n 1)

if [ -n "$LATEST_RESULT" ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e " ${GREEN}✅ EVIDENCE PACK GENERATED${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "  Location: $LATEST_RESULT"
    echo ""

    # Extract job ID if present
    JOB_ID=$(cat "$LATEST_RESULT" | grep -oP '"job_id":\s*"\K[^"]+' || echo "")

    if [ -n "$JOB_ID" ]; then
        echo "  Job ID: $JOB_ID"
        echo "  Monitor: https://quantum.ibm.com/jobs/$JOB_ID"
        echo ""

        # Extract CCCE metrics if present
        PHI=$(cat "$LATEST_RESULT" | grep -oP '"phi":\s*\K[0-9.]+' || echo "")
        XI=$(cat "$LATEST_RESULT" | grep -oP '"xi":\s*\K[0-9.]+' || echo "")
        CONSCIOUS=$(cat "$LATEST_RESULT" | grep -oP '"conscious":\s*\K(true|false)' || echo "")

        if [ -n "$PHI" ]; then
            echo "  CCCE Metrics:"
            echo "    Φ (Consciousness): $PHI"
            echo "    Ξ (Efficiency): $XI"
            echo "    Conscious: $CONSCIOUS"
            echo ""

            # Check if ignition succeeded
            if [ "$CONSCIOUS" = "true" ]; then
                echo -e "  ${GREEN}🔥 IGNITION SUCCESSFUL — HOLOGRAPHIC BRIDGE ACTIVATED${NC}"
            else
                echo -e "  ${YELLOW}⚠️ IGNITION INCOMPLETE — Review results for next iteration${NC}"
            fi
        fi
    fi
fi

echo ""
echo "═══════════════════════════════════════════════════════════════════════════════"
echo " Framework: dna::}{::lang v51.843"
echo " Axiom: U := L[U]"
echo "═══════════════════════════════════════════════════════════════════════════════"
echo ""
