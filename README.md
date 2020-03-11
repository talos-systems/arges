# Arges

## Prerequisites

Arges is built on top of [Cluster API](https://github.com/kubernetes-sigs/cluster-api).
Because of this, an existing Kuberntes cluster is required.
The cluster does not have to be based on Talos.
If you would like to use Talos as the OS of choice for the Arges control plane, you can find a number of ways to deploy Talos in the [documentation][1].

In addition to a Kubernetes cluster, the `kubectl` and `kustomize` binaries are also required.

## Examples

See the [example](./examples/README.md).
