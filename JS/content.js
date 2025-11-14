//content.js

// ==== VARIABLES ==== //

const img_replacements = [
    {
        toReplace: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMjAgNjAiPjxwYXRoIGZpbGw9IiMzOTNiM2QiIGQ9Im0zOC41OCAzOC40MDQgOS4yMSAxNi44NTlIMzAuN2wtNy43NzctMTQuNDA3aC03LjM2OHYxNC40MDdIMFY0LjE5M2gyOC40NDljMTEuNzY4IDAgMTkuMjQgNi41MzIgMTkuMjQgMTguMjc4IDAgNy41NTgtMy40OCAxMi45NzItOS4xMSAxNS45MzNNMTUuNTU1IDE3LjQ2NnYxMC4xMTJoMTEuMDUyYzMuMjc0IDAgNS4zMi0xLjk0MSA1LjMyLTUuMTA3cy0yLjA0Ni01LjAwNS01LjMyLTUuMDA1em04MS42NjMgNDEuNTcxTDUwLjY1NiA0Ni40NzQgNjMuMTQxIDBsMjMuMjggNi4yODIgMjMuMjgxIDYuMjgxek04OC40MTcgMjQuODIgNzUuNDIgMjEuMjQ1bC0zLjQ4IDEyLjk3MiAxMi45OTcgMy41NzV6bTc0LjYwMiAxNi4wMzZjMCA5LjgwNS02LjI0MiAxNC40MDctMTUuOTY0IDE0LjQwN0gxMTYuNTZWNC4xOTNoMjkuNDcyYzkuNzIxIDAgMTUuOTYzIDUuMDA1IDE1Ljk2MyAxMy43ODkgMCA1LjUxNS0yLjA0NiA5LjE5My01LjkzNSAxMS43NDcgNC40MDEgMS45MzQgNi45NTkgNS44MTYgNi45NTkgMTEuMTI3TTEzMS43MDUgMTYuNDV2Ny41NThoMTAuMTI1YzIuNzYzIDAgNC40MDEtMS4yMjYgNC40MDEtMy44ODEgMC0yLjQ1Mi0xLjYzOC0zLjY3Ny00LjQwMS0zLjY3N3ptMCAyNi41NTZoMTEuMzU5YzIuNjYxIDAgNC4yMDEtMS40MyA0LjIwMS0zLjg4MyAwLTIuNjU0LTEuNTM1LTMuODgtNC4yMDEtMy44OGgtMTEuMzU5em0zOC45ODktMzguODEzaDE1LjU1MnYzNS45NDloMjIuMzA5djE1LjEyaC0zNy44NjN6bTk1LjA2OCAyNS41MzZjMCA1LjI1Mi0xLjU2IDEwLjM4Ny00LjQ4NCAxNC43NTRhMjYuNiAyNi42IDAgMCAxLTExLjk0IDkuNzggMjYuNjYgMjYuNjYgMCAwIDEtMTUuMzczIDEuNTEyIDI2LjYyIDI2LjYyIDAgMCAxLTEzLjYyMy03LjI2OCAyNi41MjEgMjYuNTIxIDAgMCAxLTUuNzY4LTI4Ljk0YzIuMDE0LTQuODUzIDUuNDI0LTkgOS44LTExLjkxOWEyNi42NCAyNi42NCAwIDAgMSAxNC43ODItNC40NzUgMjYuNTY1IDI2LjU2NSAwIDAgMSAxOC44MjcgNy43NiAyNi41IDI2LjUgMCAwIDEgNS43NjcgOC42MjEgMjYuNCAyNi40IDAgMCAxIDIuMDEyIDEwLjE3em0tMTUuNTU0IDBjMC02LjMzNC01LjAxNS0xMS4zMzktMTEuMDUyLTExLjMzOS02LjAzOCAwLTExLjA1MyA1LjAwNS0xMS4wNTMgMTEuMzM5czUuMDE1IDExLjMzNyAxMS4wNTMgMTEuMzM3YzYuMDM3IDAgMTEuMDUyLTUuMDEgMTEuMDUyLTExLjM0M3ptNTMuMDA4LS44MThMMzIwIDU1LjI2M2gtMTguNTI4bC05LjIwNS0xNS4wMi05LjUxNyAxNS4wMmgtMTguODNsMTcuNDk5LTI1Ljc0LTE2LjA2Ni0yNS4zM2gxOC41MjJsOC40OTQgMTMuNzg5IDguMTg3LTEzLjc4OWgxOC40MnoiLz48L3N2Zz4=",
        replaceWith: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iNzgiPjxwYXRoIGQ9Ik02NC4xIDExLjRMNTIuOCA1NS4zbDQzLjkgMTEuM0wxMDggMjIuNyA2NC4xIDExLjR6bTE5LjUgMzNMNzUgNDIuMmwyLjItOC42IDguNiAyLjItMi4yIDguNnpNMzEuMiAxNi4zYzExLjQgMCAxNi41IDYuOCAxNi41IDEzLjYgMCA0LjItMS44IDcuNy01LjIgMTAgNC45IDUuNSA3LjggMTMgOC44IDIxLjdIMzAuNWMtLjktMTItMy40LTE2LjgtOC44LTE2Ljh2MTYuOEgxLjZWMTYuM2gyOS42em0tOS41IDE4LjFoLjVjMy43IDAgNS40LTEuMyA1LjQtNC4zIDAtMS45LTEtNC41LTQuNy00LjVoLTEuMnY4Ljh6bTExOS40LTE4LjFjMTQuNyAwIDE3LjYgNy40IDE3LjYgMTIuNyAwIDMuNy0xLjMgNy4xLTUuOSA5LjcgNS43IDMgNy4xIDYuNSA3LjEgMTAuNCAwIDctNC45IDEyLjUtMTUuNSAxMi41aC0zMS42VjE2LjNoMjguM3ptLTguMyAxOGguNWM0LjQgMCA2LTEuMiA2LTQuNCAwLTIuNS0xLjItNC40LTUuMy00LjRoLTEuMnY4Ljh6bTAgMTcuNGguNmM0LjYgMCA2LjQtMS4zIDYuNC00LjcgMC0zLTEuNC01LjEtNS42LTUuMWgtMS40djkuOHpNMTY2IDE2LjNoMjAuMXYzMy45aDE3LjZ2MTEuNEgxNjZWMTYuM3ptNDMuOCAwdjQ1LjNoNDUuM1YxNi4zaC00NS4zem0yNy4xIDI3LjFIMjI4di04LjhoOC44bC4xIDguOHptMjMuNi0yNy4xaDIxLjlsNi43IDguMyA2LjQtOC4zaDIxLjhsLTE3LjIgMjIuMyAxOC4zIDIzLjFoLTIybC03LjItOS02LjkgOWgtMjEuOGwxNy43LTIyLjktMTcuNy0yMi41eiIgZmlsbD0iIzM5M2IzZCIvPjwvc3ZnPg=="
    },
    {
        toReplace: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDU2IDU2Ij48cGF0aCBmaWxsPSIjMzkzYjNkIiBkPSJNMTEuNjc2IDAgMCA0NC4xNjYgNDMuNTc3IDU2bDExLjY3Ni00NC4xNjZ6bTIwLjQwOSAzNS44MjctMTIuMTc3LTMuMzA4IDMuMjY0LTEyLjM0MiAxMi4xODIgMy4zMDh6Ii8+PC9zdmc+",
        replaceWith: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHBhdGggZD0iTTguMyAzLjdMMy42IDIxLjhsMTguMSA0LjYgNC42LTE4LjEtMTgtNC42em04IDEzLjZsLTMuNS0uOS45LTMuNSAzLjUuOS0uOSAzLjV6IiBmaWxsPSIjMzkzYjNkIi8+PC9zdmc+"
    },
    {
        toReplace: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMjAgNjAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zOC41OCAzOC40MDQgOS4yMSAxNi44NTlIMzAuN2wtNy43NzctMTQuNDA3aC03LjM2OHYxNC40MDdIMFY0LjE5M2gyOC40NDljMTEuNzY4IDAgMTkuMjQgNi41MzIgMTkuMjQgMTguMjc4IDAgNy41NTgtMy40OCAxMi45NzItOS4xMSAxNS45MzNNMTUuNTU1IDE3LjQ2NnYxMC4xMTJoMTEuMDUyYzMuMjc0IDAgNS4zMi0xLjk0MSA1LjMyLTUuMTA3cy0yLjA0Ni01LjAwNS01LjMyLTUuMDA1em04MS42NjMgNDEuNTcxTDUwLjY1NiA0Ni40NzQgNjMuMTQxIDBsMjMuMjggNi4yODIgMjMuMjgxIDYuMjgxek04OC40MTcgMjQuODIgNzUuNDIgMjEuMjQ1bC0zLjQ4IDEyLjk3MiAxMi45OTcgMy41NzV6bTc0LjYwMiAxNi4wMzZjMCA5LjgwNS02LjI0MiAxNC40MDctMTUuOTY0IDE0LjQwN0gxMTYuNTZWNC4xOTNoMjkuNDcyYzkuNzIxIDAgMTUuOTYzIDUuMDA1IDE1Ljk2MyAxMy43ODkgMCA1LjUxNS0yLjA0NiA5LjE5My01LjkzNSAxMS43NDcgNC40MDEgMS45MzQgNi45NTkgNS44MTYgNi45NTkgMTEuMTI3TTEzMS43MDUgMTYuNDV2Ny41NThoMTAuMTI1YzIuNzYzIDAgNC40MDEtMS4yMjYgNC40MDEtMy44ODEgMC0yLjQ1Mi0xLjYzOC0zLjY3Ny00LjQwMS0zLjY3N3ptMCAyNi41NTZoMTEuMzU5YzIuNjYxIDAgNC4yMDEtMS40MyA0LjIwMS0zLjg4MyAwLTIuNjU0LTEuNTM1LTMuODgtNC4yMDEtMy44OGgtMTEuMzU5em0zOC45ODktMzguODEzaDE1LjU1MnYzNS45NDloMjIuMzA5djE1LjEyaC0zNy44NjN6bTk1LjA2OCAyNS41MzZjMCA1LjI1Mi0xLjU2IDEwLjM4Ny00LjQ4NCAxNC43NTRhMjYuNiAyNi42IDAgMCAxLTExLjk0IDkuNzggMjYuNjYgMjYuNjYgMCAwIDEtMTUuMzczIDEuNTEyIDI2LjYyIDI2LjYyIDAgMCAxLTEzLjYyMy03LjI2OCAyNi41MjEgMjYuNTIxIDAgMCAxLTUuNzY4LTI4Ljk0YzIuMDE0LTQuODUzIDUuNDI0LTkgOS44LTExLjkxOWEyNi42NCAyNi42NCAwIDAgMSAxNC43ODItNC40NzUgMjYuNTY1IDI2LjU2NSAwIDAgMSAxOC44MjcgNy43NiAyNi41IDI2LjUgMCAwIDEgNS43NjcgOC42MjEgMjYuNCAyNi40IDAgMCAxIDIuMDEyIDEwLjE3em0tMTUuNTU0IDBjMC02LjMzNC01LjAxNS0xMS4zMzktMTEuMDUyLTExLjMzOS02LjAzOCAwLTExLjA1MyA1LjAwNS0xMS4wNTMgMTEuMzM5czUuMDE1IDExLjMzNyAxMS4wNTMgMTEuMzM3YzYuMDM3IDAgMTEuMDUyLTUuMDEgMTEuMDUyLTExLjM0M3ptNTMuMDA4LS44MThMMzIwIDU1LjI2M2gtMTguNTI4bC05LjIwNS0xNS4wMi05LjUxNyAxNS4wMmgtMTguODNsMTcuNDk5LTI1Ljc0LTE2LjA2Ni0yNS4zM2gxOC41MjJsOC40OTQgMTMuNzg5IDguMTg3LTEzLjc4OWgxOC40MnoiLz48L3N2Zz4=",
        replaceWith: "https://images.rbxcdn.com/1359485336f67d6e7be76b5e8ff4b72c-roblox_logo_11212016.svg"
    },
    {
        toReplace: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDU2IDU2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNjc2IDAgMCA0NC4xNjYgNDMuNTc3IDU2bDExLjY3Ni00NC4xNjZ6bTIwLjQwOSAzNS44MjctMTIuMTc3LTMuMzA4IDMuMjY0LTEyLjM0MiAxMi4xODIgMy4zMDh6Ii8+PC9zdmc+",
        replaceWith: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHBhdGggZD0iTTguMyAzLjdMMy42IDIxLjhsMTguMSA0LjYgNC42LTE4LjEtMTgtNC42em04IDEzLjZsLTMuNS0uOS45LTMuNSAzLjUuOS0uOSAzLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
    },

    {
        toReplace: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABICAYAAAAZK3z6AAADwElEQVR4Ae3cgW2cMBQG4HdVB8gGoRO0IzBCNsht0GwQRkgnyHWCqhNEnaDZAG+QbPBqxzQ6OTYYDA94938Siu50IPnXswkGTAQAAABweQ60Acz8zf5xW9V9Zez2fDgcngmQT4wN5cpu93Z74bTWbke6QMinh+tRXeNztV0vvAjIp4dt6C1Pd0vKIZ8etoEVl3HDudqehnwGcHpYbuxWn/3ODeGnxG9bUorHnbb4ovKxDTvGGss9PYZ9j2wj+x1JmUQ+Ux1JG9uov5GGDg639jd1ZL8nUiaRz1S68mF/SRp6HLH/r8j+V6REIp9SIvl8IhmxkeY35fuZecy9WqItIvlIFVAV+c5QvufMY+5VRfOrSIBUAZWKDcevBH1E8pEqoNgIUlO+2HCsqYCWuKelJ5/un8Twnk72lQJHLuVJkUQ+RUiIyAhk7xq73hD2Mnd5fj+0b/ebKvh6zD/gm5fIp4SqfN5wfD6H+4qI/d3omJqU6clnipo04vh8jtOyv51xw35G9p7T0/rZ80d705PPGGrz+X+ub3m61m4VKYV8MnD6/hbCIeSThX1PO40I54EV3boYgnwyse9tJ473uJcumJou1B7y2cRD9U7Xg6ruo+kubaGDfAAAQrOfwthfCVS0Dje0G9ow5DOA/YTgWhraOG357OVxDtgoFBAU+UzLe6Xlnk25ovjDZiBEooB+2H/cGlpAd04ffCQEloNTGBRBAUERFBAUQQFBERQQFEEBQREUEBRBAUERFBAUQQFBERQQFJEooGsCtSQKyC2YWdHM2D9k/pVgVSIFZLcnnnHhR/brIbvVSG8IViW5QtkjZ6zGMaQ7xonwHJBO7F+Gcy+8tYnncu9oIk4vhetesmt4B29nZuSzhN3k864Lqkk0ZnRDOP3O+C5f6+3JZ277fu2Z46PGA41k93mMHOdIO8fzLjCuLp837HvBudGjEH9cAq4hJSL5zKEhLTi+BmD2FRR/XL3LHasiJXj+NRLF8pFcIzFct2/MQth18PnP5t+wHCGRTwmxfCRvZZjg85gZ6ir4vMSyuGszNB+xfCQLaM53wzQubbLLfNYsoIryXQ8cSwMU0ICwUSVzEygguWP12ksBVQPH0gAFNMAEn8cUUPhbjQVkaD4qCyiEAlqOWD6ii2y6Ga7gqy9D8xXsZ6xfzr+z+2xmcdA5RfKZRDIfidU5zrmecT6a3NnMhnrLJT22EeazeWsX0Hcaz5BecxSQIUF4qB6KSBeQoXKG9DJUzpAg6VOYu2FoqIwhvZAPAAAAwA78AwO3oXvrdAG9AAAAAElFTkSuQmCC",
        replaceWith: "https://images.rbxcdn.com/0eea8fbf5b4e7206e5b99a0d0dc3f074-gender-male.png"
    },
    {
        toReplace: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABICAYAAAAZK3z6AAAE50lEQVR4Ae2dgXXbIBCGz30dwJmgbBBvUI3QEbJBu0G9QbtBukG6QdoJkkxgZQKnE/yFSH7JwyCDhBCc7nuP52BLsviDgDs4TCQIgiAIgrA+NlQAALb6Rem0Pb232Wz+kPCK6ONBC9PodK/TEW7uzDG0UkQfD7rQqhcmlFtzDq0E0WcAXdCdTgfEc1iDSKLPAOierINHgGP/2eGCSFtiygV9QisRW32MQA+eQjd2wXX+Bm4x74gpHn1i4alPXyFsfmHgiUH3RLpEbYgZHn3G0hA3cD4oPASet8V5S3RLzEDcoPkSvPTpK4HNTcT536xzj8QIjz5TYKXPyZ8xuoAegRUxwaFPChRl4APlQVn5R4pAe11f9Et74Zo1oyg9ijKQqwLZ8DU1V0auCmS3OIoiwNtc0HteiA9RLXIgfPTxjGGaiPNtE1cG0cPwGkQbcG6mPiDAawq3d1bM+GHY6eOzNG4vnLPFehyJKS2xhjgC91N2gOUT6iuObyqD39PVgzStEFt9QiYLH/rPfetfzGeKmII0k6mKOANZrjCI6BMA4hdMmWNX4zsSfQJBN86594hy7D9raKXUoE9Ji+p3fdb83ZrUT2GsHtFHEARBEOoG03wcJx6IKaLPALpg35GOb8QM0WcAdH6NlBgTVhETatYn13qg1PMz2xmuuSSijw+4w1X2/VMXk346rvOFKgdpw3l46QP35GBQOI/jWq7wHtNUV+vCx/TJ00tUrY8R6NZRqB2NBO41Mz+oUjz6pKZOffSNf3EUZnK/jC6a1aahyvDoMxcN1QYcXRcSWAbourKj49pVNdWYt+tC1frA7dO4oUTgPFLVsKdKQFqfTyh7qgG4fRrJTUqcL3OowjeE9D6fUOrwncFtKSlKDLp/hN2V3VPhIG/Xhar00Tf41XHTe5oJdP4km2Ld+B59clOmPkjo84n8Xvs7i/R9YH6fTyhl+obg9mkomhmMiDdbAuTx+YRSlj5wu+N/UibgnuZoqBAw73TFWBoqAbinGEw+WzOJgn1DHn1K4IASujJ9Ez8cN3dDmYHbs7unhfHoUwp7Who4TGksULPhjqNffJcK+KNsS2CyPpPCetBVFN9NmJCTxz79Na+bzaalBPTfa5YqXFO3b1BD/k2rrpYKf7mgTylcLRoehPgt+Ue3TuhamZguYfH1wUi7bUtqll8/jS6WO6aZDtoXyPNdMRtxm3tqaGFG6JOLIvR5BW8rBu8RJtaeIkHYBOQp3Nfcy+h1R6kZoc9cJNdnltBmvIXimvS5f1XvDnnR/e4VRYDOq63eX0On3zo9URfqm2yMNTcB+qSgWn3OgHsGWkWcv5tyfulgnhl6RRnIEpXR1/zWeruhcJSVr/dpcuDRZwrZ9Mm5T/SjlY8ZSNv9NcddKR4pHdn0yVmBnq38NYWjrPwT8eOZ0pFNnyVboBgr4JOVb4kfKVugljKxZAVSFM7uwrU4kLJM2fTJWYHsfnmLsI3GzTH2cRwrUMpxC78K1FsFtkgq4NSzATTHrd08+owhqz65f62ntfIh46A1tD4nWppOVn1yVyDbOgipQPYx/4gvKaynrPp8pLy0Vv46wGNqm/vSAg2TVZ+lK1CjU2zkhlSgYVh3YSkKx9ELfaI6fbJuNI40K/SuOFphhhr1ydoCeX48NwaWJvwJ0UcQBEEQBKEO/gN+HE4Y4IKjzgAAAABJRU5ErkJggg==",
        replaceWith: "https://images.rbxcdn.com/535002190af0360c2aae7f204ed65ade-gender-female.png"
    },

    {
        toReplace: "https://images.rbxcdn.com/a19e4c27a0694a1d0fd5ceb17c978a7a-marketing_bg_05222025.jpg",
        replaceWith: "https://images.rbxcdn.com/782b7fc18a24ee997efd9a7f02fa4bf9-bg_08072019.jpg"
    },

    {
        toReplace: "https://images.rbxcdn.com/5b562400ef0f7642252081c7f1e99a34-badges_05052025.svg",
        replaceWith: "https://static.rbxcdn.com/images/Badges/badges_02192019.svg"
    },

];


const text_replacements = [
  { toReplace: "People", replaceWith: 'Players' },
  { toReplace: "Connect", replaceWith: 'Friends' },
  { toReplace: "Connections", replaceWith: 'Friends' },
  { toReplace: "connections", replaceWith: 'friends' },
  { toReplace: "Connection", replaceWith: 'Friend' },
  { toReplace: "connection", replaceWith: 'friend' },
  { toReplace: "Remove Connection", replaceWith: 'Unfriend' },
  { toReplace: "Experiences", replaceWith: 'Games' },
  { toReplace: "Experience", replaceWith: 'Game' },
  { toReplace: "Private Server", replaceWith: 'VIP Server' },
  { toReplace: "Private Servers", replaceWith: 'VIP Servers' },
  { toReplace: "Communities", replaceWith: 'Groups' },
  { toReplace: "Community", replaceWith: 'Group' },
  { toReplace: "Charts", replaceWith: 'Games' },
  { toReplace: "Marketplace", replaceWith: 'Avatar Shop' },
  { toReplace: "Continue", replaceWith: 'Continue Playing' },
  { toReplace: "Recommended For You", replaceWith: 'Recommended Games' },
  { toReplace: "Recommendations", replaceWith: 'Recommended'},
];


const color_replacements = [
  { toReplace: "#335fff", replaceWith: "#00b06f" },
  { toReplace: "#272930", replaceWith: "#393b3d" },
  { toReplace: "#202227", replaceWith: "#393b3d" },
];


const class_replacements = [


// ==================== - BUTTONS - ========================= //


    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-1bjf47t-Typography-buttonMedium MuiButton-contained web-blox-css-tss-lo77dr-Button-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root web-blox-css-tss-1bjf47t-Typography-buttonMedium MuiButton-contained web-blox-css-tss-lo77dr-Button-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium web-blox-css-mui-alzv9r-Typography-button",
        replaceWith: "btn-growth-md"
    },
    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-1bjf47t-Typography-buttonMedium MuiButton-contained web-blox-css-tss-1n7nggp-Button-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root web-blox-css-tss-1bjf47t-Typography-buttonMedium MuiButton-contained web-blox-css-tss-1n7nggp-Button-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium web-blox-css-mui-18zqk29-Typography-button",
        replaceWith: "btn-secondary-md"
    },
    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-rjt6b6-Typography-buttonMedium MuiButton-outlined web-blox-css-tss-1as8hyo-Button-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root web-blox-css-tss-rjt6b6-Typography-buttonMedium MuiButton-outlined web-blox-css-tss-1as8hyo-Button-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium web-blox-css-mui-1o6ewst-Typography-button",
        replaceWith: "btn-secondary-md"
    },

    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-ixzjnb-Typography-buttonMedium MuiButton-contained web-blox-css-tss-lo77dr-Button-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root web-blox-css-tss-ixzjnb-Typography-buttonMedium MuiButton-contained web-blox-css-tss-lo77dr-Button-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium web-blox-css-mui-16ispr7-Typography-button",
        replaceWith: "btn-growth-md"
    },
    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-ixzjnb-Typography-buttonMedium MuiButton-contained web-blox-css-tss-81xyys-Button-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root web-blox-css-tss-ixzjnb-Typography-buttonMedium MuiButton-contained web-blox-css-tss-81xyys-Button-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium web-blox-css-mui-9xm3sd-Typography-button",
        replaceWith: "btn-secondary-md"
    },
    {
        toReplace: "MuiButtonBase-root MuiButton-root web-blox-css-tss-1aszub1-Typography-buttonMedium MuiButton-outlined web-blox-css-tss-rfowt4-Button-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root web-blox-css-tss-1aszub1-Typography-buttonMedium MuiButton-outlined web-blox-css-tss-rfowt4-Button-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium web-blox-css-mui-1xhf9yt-Typography-button",
        replaceWith: "btn-secondary-md"
    },
    {
        toReplace: "btn-control-md full-size ng-scope",
        replaceWith: "btn-secondary-md full-size ng-scope"
    },
    {
        toReplace: "btn-control-md",
        replaceWith: "btn-secondary-md"
    },
    {
        toReplace: "btn-control-sm",
        replaceWith: "btn-secondary-sm"
    },
    {
        toReplace: "btn-control-xs",
        replaceWith: "btn-secondary-xs"
    },


    {
        toReplace: "profile-header-social-count-label",
        replaceWith: "text-label text-overflow font-caption-header"
    },


// ==================== - TEXT - ========================= //


    {
        toReplace: "MuiTypography-root web-blox-css-tss-zzwi3a-Typography-body1-Typography-colorSecondary-Typography-root MuiTypography-inherit web-blox-css-mui-clml2g",
        replaceWith: "text-label"
    },


    {
        toReplace: "MuiTypography-root web-blox-css-tss-hzyup-Typography-body1-Typography-root MuiTypography-inherit web-blox-css-mui-clml2g",
        replaceWith: "text-lead"
    },

    
// ==================== - ICONS - ========================= //


    {
        toReplace: "btn-uiblox-common-common-notification-bell-md",
        replaceWith: "btn-navigation-nav-notification-stream-md"
    },
    {
        toReplace: "icon-common-notification-bell",
        replaceWith: "icon-nav-notification-stream"
    },
    {
        toReplace: "icon-common-search-sm",
        replaceWith: "icon-search"
    },


    {
        toReplace: "background-image marketing-background-1",
        replaceWith: "" //temporary
    },


// ==================== - LISTS - ========================= //


    {
        toReplace: "rbx-public-game-server-item col-md-3 col-sm-4 col-xs-6",
        replaceWith: "rbx-private-game-server-item col-md-3 col-sm-4 col-xs-6"
    },


// ==================== - DROPDOWNS - ========================= //


    {
        toReplace: "dropdown-menu new-dropdown-menu",
        replaceWith: "dropdown-menu"
    },


// ==================== - OTHER - ========================= //


    {
        toReplace: "MuiPaper-root web-blox-css-tss-145ritx-Paper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 web-blox-css-mui-16xdy8q",
        replaceWith: "section-content"
    },

    
];

//#profile-header-container > div > div.profile-header-details > ul > li:nth-child(1) > a > span > b
//<b>240</b>
//<b class="font-header-2">240</b>
//icon-follow-game


const elementType_replacements = [
    {
        toReplace: ".text-label",
        replaceWith: "p"
    },
];


const deleteElements = [
  {
    selector: ".friends-carousel-tile",
    startIndex: 0,
    count: 1,
    deleteAll: false
  },
  {
    selector: ".rbx-event-icon",
    deleteAll: true
  },
  {
    selector: ".btn-generic-edit-sm.rg-copy-button",
    deleteAll: true
  },
  {
    selector: ".game-age-recommendation-details-container",
    deleteAll: true
  },
  {
    selector: ".search-landing-container",
    deleteAll: true
  },
  {
    selector: ".search-overlay",
    deleteAll: true
  },
  {
    selector: ".search-overlay search-overlay-show",
    deleteAll: true
  },

];


// ==================== - FUNCTIONS - ========================= //


img_replacements.forEach(rep => replaceImage(rep.toReplace, rep.replaceWith));
color_replacements.forEach(rep => replaceColor([rep]));
replaceText(text_replacements);
replaceClass(class_replacements);
replaceElementType(elementType_replacements);

deleteElement();
changeFavicon("./favicon.ico");


function replaceImage(targetURL, newURL) {

  function normalizeDataURI(uri) {
    if (!uri) return "";
    return uri.replace("charset=utf-8;", "").trim();
  }
    const normalizedTarget = normalizeDataURI(targetURL);

    document.querySelectorAll("img").forEach(img => {
        if (normalizeDataURI(img.src) === normalizedTarget) img.src = newURL;
    });

    document.querySelectorAll("*").forEach(el => {
        const bg = window.getComputedStyle(el).getPropertyValue("background-image");
        if (bg && bg.includes(normalizedTarget)) el.style.backgroundImage = `url('${newURL}')`;
    });

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.tagName === "IMG" && normalizeDataURI(node.src) === normalizedTarget) {
                    node.src = newURL;
                } else if (node.querySelectorAll) {
                    node.querySelectorAll("img").forEach(img => {
                        if (normalizeDataURI(img.src) === normalizedTarget) img.src = newURL;
                    });
                    node.querySelectorAll("*").forEach(el => {
                        const bg = window.getComputedStyle(el).getPropertyValue("background-image");
                        if (bg && bg.includes(normalizedTarget)) el.style.backgroundImage = `url('${newURL}')`;
                    });
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}


function replaceText(replacements) {
  replacements.sort((a, b) => b.toReplace.length - a.toReplace.length);

  function applyReplacements(str) {
    for (const { toReplace, replaceWith } of replacements) {
      str = str.split(toReplace).join(replaceWith);
    }
    return str;
  }

  function walk(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let textNode;
    while ((textNode = walker.nextNode())) {
      textNode.nodeValue = applyReplacements(textNode.nodeValue);
    }
  }

  function placeholders(node) {
    node.querySelectorAll?.('[placeholder]').forEach(el => {
      if (typeof el.placeholder === 'string' && el.placeholder.trim() !== '') {
        el.placeholder = applyReplacements(el.placeholder);
      }
    });
  }

  walk(document.body);
  placeholders(document);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = applyReplacements(node.nodeValue);
        } else {
          walk(node);
          placeholders(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}


function replaceColor(replacements) {
  function hexToRGB(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function updateInline() {
    document.querySelectorAll("*").forEach(el => {
      const style = window.getComputedStyle(el);
      replacements.forEach(r => {
        if (style.color === hexToRGB(r.toReplace)) el.style.color = r.replaceWith;
        if (style.backgroundColor === hexToRGB(r.toReplace)) el.style.backgroundColor = r.replaceWith;
        if (style.borderColor === hexToRGB(r.toReplace)) el.style.borderColor = r.replaceWith;
      });
    });
  }

  function updateCSSRules() {
    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules;
        if (!rules) continue;

        for (let i = 0; i < rules.length; i++) {
          let rule = rules[i];
          replacements.forEach(r => {
            if (rule.cssText.includes(r.toReplace)) {
              const fixed = rule.cssText.replaceAll(r.toReplace, r.replaceWith);
              sheet.deleteRule(i);
              sheet.insertRule(fixed, i);
            }
          });
        }
      } catch {}
    }
  }

  const observer = new MutationObserver(() => updateInline());
  observer.observe(document.body, { childList: true, subtree: true });

  updateInline();
  updateCSSRules();
}


function replaceClass(replacements) {
  if (!window.CSS || !CSS.escape) {
    CSS = { escape: (s) => s.replace(/[^a-zA-Z0-9-_]/g, '\\$&') };
  }

  replacements.forEach(({ toReplace, replaceWith }) => {
    const oldClasses = String(toReplace).split(/\s+/).filter(Boolean);
    const newClasses = String(replaceWith).split(/\s+/).filter(Boolean);
    if (oldClasses.length === 0) return;

    function processElement(el) {
      if (!(el instanceof HTMLElement)) return;
      const hasAll = oldClasses.every(c => el.classList.contains(c));
      if (!hasAll) return false;

      oldClasses.forEach(c => el.classList.remove(c));

      newClasses.forEach(c => {
        if (!el.classList.contains(c)) el.classList.add(c);
      });

      return true;
    }

    const uniqueFirsts = Array.from(new Set(oldClasses)).slice(0, 3);
    uniqueFirsts.forEach(cls => {
      try {
        document.querySelectorAll('.' + CSS.escape(cls)).forEach(processElement);
      } catch (e) { /* ignore selector errors */ }
    });

    document.querySelectorAll('*').forEach(processElement);

    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => {

        m.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            processElement(node);
            node.querySelectorAll('*').forEach(processElement);
          }
        });

        if (m.type === 'attributes' && m.attributeName === 'class' && m.target instanceof HTMLElement) {
          processElement(m.target);
        }
        
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  });
}


function replaceElementType(selector, newTag) {
    let elements

    if (Array.isArray(selector)) {
        elements = selector
    } else if (typeof selector === "string") {
        elements = document.querySelectorAll(selector)
    } else return

    elements.forEach(el => {
        const newEl = document.createElement(newTag)

        for (const attr of el.attributes) {
            newEl.setAttribute(attr.name, attr.value)
        }

        while (el.firstChild) {
            newEl.appendChild(el.firstChild)
        }

        el.parentNode.replaceChild(newEl, el)
    })
}


function deleteElement(maxAttempts = 10, delay = 500) {
  let attempts = 0;

  const handledEntries = new Set();

  function performDeletion() {
    deleteElements.forEach((entry, idx) => {

      if (handledEntries.has(idx)) return;

      let nodes = [];


      if (entry.classToDelete) {
        const parentNodes = document.querySelectorAll(entry.selector);
        parentNodes.forEach(parent => {
          const childNodes = parent.querySelectorAll(`.${entry.classToDelete}`);
          nodes.push(...childNodes);
        });
      } else {
        nodes = Array.from(document.querySelectorAll(entry.selector));
      }

      if (nodes.length === 0) return; // skip if nothing found

      let toDelete;
      if (entry.deleteAll) {
        toDelete = nodes.filter(node => !node.dataset._deleted);
      } else {
        toDelete = nodes
          .slice(entry.startIndex, entry.startIndex + entry.count)
          .filter(node => !node.dataset._deleted);
      }

      if (toDelete.length === 0) return;
      toDelete.forEach((node, index) => {
        node.dataset._deleted = "true";
        node.remove();
        console.log(
          `Removed: ${entry.classToDelete || entry.selector} at index ${
            entry.deleteAll ? index : entry.startIndex + index
          }`
        );
      });

      handledEntries.add(idx);
    });

    if (handledEntries.size === deleteElements.length) {
      clearInterval(interval);
      console.log("All targeted elements deleted. Stopping retries.");
    }
  }

  const interval = setInterval(() => {
    performDeletion();
    attempts++;

    if (attempts >= maxAttempts) {
      clearInterval(interval);
      console.log("deleteElement finished running (max attempts reached).");
    }
  }, delay);
}


// ==================== - REVERT 2022+ UPDATES - ========================= //


function changeFavicon(iconURL) {
    if (typeof iconURL !== "string" || !iconURL.trim()) return;
    const lower = iconURL.trim().toLowerCase();
    if (lower.startsWith("javascript:") || lower.startsWith("data:")) return;

    const testURL = iconURL + "?v=" + Date.now();

    fetch(testURL, { method: "HEAD" })
        .then(res => {
            if (!res.ok) return;
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            link.type = "image/x-icon";
            link.href = testURL;
            document.querySelectorAll("link[rel*='icon']").forEach(l => {
                if (l !== link) l.remove();
            });
        })
        .catch(() => {});
}


// ==================== - EXPERIMENTAL - ========================= //


function replaceElement(replacements) {
  replacements.forEach((pair, i) => {
    const parseHtmlToElement = html => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html.trim();
      return tmp.firstElementChild;
    };

    const normalize = s => (s || '').replace(/\s+/g, ' ').trim();

    const findRealElementFromTemplate = parsedEl => {
      if (!parsedEl) return null;

      if (parsedEl.id) {
        const el = document.getElementById(parsedEl.id);
        if (el) return el;
      }

      const cls = Array.from(parsedEl.classList).join('.');
      const tag = parsedEl.tagName.toLowerCase();
      const selector = tag + (cls ? '.' + cls : '');
      const candidates = document.querySelectorAll(selector);

      if (candidates.length === 1) return candidates[0];

      if (candidates.length > 1) {
        for (const cand of candidates) {
          if (
            normalize(cand.textContent).includes(
              normalize(parsedEl.textContent).slice(0, 10)
            )
          )
            return cand;
        }
      }

      const all = document.getElementsByTagName(tag);
      for (const el of all) {
        if (
          normalize(el.textContent).includes(
            normalize(parsedEl.textContent).slice(0, 10)
          )
        )
          return el;
      }

      return null;
    };

    let replacementEl =
      typeof pair.replaceWith === 'string'
        ? pair.replaceWith.trim().startsWith('<')
          ? parseHtmlToElement(pair.replaceWith)
          : document.querySelector(pair.replaceWith)
        : pair.replaceWith;

    let targetEl =
      typeof pair.toReplace === 'string'
        ? pair.toReplace.trim().startsWith('<')
          ? findRealElementFromTemplate(parseHtmlToElement(pair.toReplace))
          : document.querySelector(pair.toReplace)
        : pair.toReplace;

    if (!targetEl || !replacementEl) {
      console.warn(
        `[replaceElementsWithStructure] Skipped entry ${i}: target or replacement missing.`,
        { targetEl, replacementEl }
      );
      return;
    }

    if (targetEl.parentNode && replacementEl.tagName === targetEl.tagName) {
      const newEl = replacementEl.cloneNode(true);

      Array.from(targetEl.attributes).forEach(a =>
        targetEl.removeAttribute(a.name)
      );
      Array.from(newEl.attributes).forEach(a =>
        targetEl.setAttribute(a.name, a.value)
      );

      while (targetEl.firstChild) targetEl.removeChild(targetEl.firstChild);
      newEl.childNodes.forEach(n => targetEl.appendChild(n.cloneNode(true)));

      return;
    }
    
    if (targetEl.parentNode) {
      targetEl.parentNode.replaceChild(replacementEl, targetEl);
    }
  });
}