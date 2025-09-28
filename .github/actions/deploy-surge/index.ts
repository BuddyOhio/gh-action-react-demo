import * as core from "@actions/core"
import * as exec from "@actions/exec"

async function main() {

  // bun x surge --token c038f5f8cb235f3283f6529316af42ef --login worrawut@aquilastudio.net dist work-shop-2.surge.sh

  // 1 token
  const token = core.getInput("token", {
    required: true,
    trimWhitespace: true
  })
  // 2 email
  const email = core.getInput("email", {
    required: true,
    trimWhitespace: true
  })
  // 3 dist folder
  const distFolder = core.getInput("dist-folder", {
    required: true,
    trimWhitespace: true
  })
  // 4 domain .surge.sh
  const domain = core.getInput("domain", {
    required: true,
    trimWhitespace: true
  })

  const command = `bun x surge --token ${token} --login ${email} ${distFolder} ${domain}`

  return exec.exec(command)
}

main()