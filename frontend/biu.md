# biu install and usage

<https://mindon.dev/biu/>


# template support

using wails3 from <https://github.com/mindon/wails> 
or manual add following to build/Taskfile.yml under the **tasks:**

```yaml
  # template https://github.com/mindon/wails-lit-biu-ts
  install:frontend:deps:biu:
    dir: frontend
    sources:
      - src
    generates:
      - dist
    preconditions:
      - sh: biu --version
        msg: "biu not found"
    cmds:
      - biu

  frontend:run:biu:
    dir: frontend
    cmds:
      - biu

  frontend:dev:biu:
    dir: frontend
    cmds:
      - biu --serve {{.VITE_PORT}}
```
