# convert-cidv0-cidv1

A GitHub action for converting a CIDv0 value to CIDv1.

Takes the following required arguments:

- cidv0: the v0 IPFS CID

Outputs the following values:

- cidv1: the v1 version of the input CIDV0

Example usage:

```yaml
- name: Convert CIDV0
  id: convert_cidv0
  uses: uniswap/convert-cidv0-cidv1@v1.0.0
  with:
    cidv0: Qm...

- name: Use CIDv1
  run: echo ${{ steps.convert_cidv0.outputs.cidv1 }}
```
