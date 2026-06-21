---
name: Improving Engineering-Constrained Machine Learning for Power Systems
speakers:
  - Priya Donti
categories:
  - Talk
published: true
---

#### Talk Abstract

Differentiable optimization layers and other constraint-enforcing machine learning architectures have shown significant promise for power system applications. For instance, recent work has demonstrated ML-based AC-OPF approximations that are an order of magnitude faster and more scalable than traditional optimization methods, while still preserving solution quality and satisfying hard physical constraints. However, despite these advances, embedding constraint enforcement mechanisms within neural networks introduces new challenges, including the computational cost of constraint handling and difficult optimization landscapes that can hinder training and limit performance. In this talk, we will present three approaches to address these challenges: leveraging problem structure to design more scalable constraint enforcement layers, using “cheap” approximate training labels that reduce overall training costs while enhancing model performance, and combining learned inexact constraint enforcement with formal verification. We will show that these approaches can help improve the scalability and reliability of engineering-constrained machine learning for power systems.
