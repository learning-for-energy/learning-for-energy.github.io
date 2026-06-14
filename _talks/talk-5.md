---
name: Data-Driven Optimal Voltage Control for Power Distribution Systems
speakers:
  - Wenqi Cui
categories:
  - Talk
---

#### Talk Abstract

High variability of solar PV and sudden changes in load (e.g., electric vehicles and storage) can lead to large voltage fluctuations.  In recent years, a number of advanced controllers have been designed to optimize voltage control. However, these controllers typically rely on fixed linear approximations of voltage dynamics with time-invariant load.  Given the intermittent and uncertain nature of renewable resources, it is becoming important to explicitly consider net load that is time-varying and the shift of model from the fixed linearization.

This talk will first describe an adaptive approach to voltage control in power systems with significant time-varying net load. This enables us to leverage advances in short-term load forecasting, and we show that the overall control architecture achieves input-to-state stability in a decentralized manner. I will then describe a data-driven successive linearization approach for voltage control under nonlinear power flow constraints. Convergence of the proposed method to KKT points is established by exploiting the convexity of the objective function and the structural properties of the nonlinear constraints. Case studies show that the proposed approach achieves fast convergence and adapts quickly to changes in net load.
