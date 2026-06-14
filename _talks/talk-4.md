---
name: Homeomorphism Methods for Efficient Learning and Optimization with Hard Constraints
speakers:
  - Enming Liang
categories:
  - Talk
---

#### Talk Abstract

Modern energy systems require efficient decisions under hard physical and operational constraints. Classical solvers provide performance guarantees but can be slow for repeated real-time operation, while machine learning-based methods are fast but may violate safety-critical limits. This talk presents homeomorphism as a  design principle for bridging this gap: by mapping complex feasible regions to simple domains, hard constrained optimization or neural network feasibility recovery can be made computationally easier while preserving the structure of the original problems. Building on this principle, the talk introduces two homeomorphism-based methods for constrained decision-making. Hom-PGD transforms optimization over general convex feasible sets into optimization over simple domains, enabling faster first-order algorithms without expensive oracle subproblems while achieving optimal convergence rates. Hom-Projection learns homeomorphic mappings for non-convex feasible sets and uses low-complexity bisection to recover neural network solution feasibility with bounded optimality loss. Applications to SOCP, AC-OPF, and SDP demonstrate runtime efficiency while preserving feasibility and solution quality.
