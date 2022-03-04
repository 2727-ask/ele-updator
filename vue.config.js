module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.electron.ele_updator",
        "productName": "ele_updator",
        "publish": [
          {
            "provider": "github",
            "owner": "2727-ask",
            "repo": "ele-updator"
          }
        ],
        "win": {
          "publish": [
            "github"
          ],
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64",
                "ia32"
              ]
            }
          ]
        }

      }
    }
  }
}