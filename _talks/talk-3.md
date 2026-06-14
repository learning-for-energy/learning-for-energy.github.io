---
name: Physics-Informed, Topology-Aware Learning for Safe and Reliable Operation of Sustainable Energy Systems
speakers:
  - Petr Musilek
categories:
  - Talk
---

#### Talk Abstract

The integration of renewable energy and distributed resources into modern power grids demands learning-based tools that are physically consistent, interpretable, and robust under changing operating conditions. Standard data-driven methods are physics-blind: they exploit statistical correlations without awareness of the conservation laws, thermal limits, and network topology that govern safe grid operation. This talk presents a framework for physics-informed learning that embeds physical laws and engineering constraints directly into model architecture and training, using a hybrid objective that yields models which are simultaneously data-efficient, causally grounded, and auditable. As a concrete application, we present a topology-aware spatiotemporal framework for dynamic EV hosting capacity estimation in distribution feeders, where rapid EV adoption creates new voltage and thermal stress. By representing the feeder as a graph with physically meaningful edge descriptors and applying an edge-conditioned attention mechanism, the framework maintains high accuracy across feeder reconfigurations and consistently outperforms topology-agnostic baselines - demonstrating that explicitly encoding network structure and equipment constraints is essential for reliable, operationally deployable energy AI.
