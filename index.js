const core = require('@actions/core')
const CID = require('cids')

try {
  const cidv0 = core.getInput('cidv0')
  const cid = new CID(cidv0)
  core.setOutput('cidv1', cid.toV1().toString())
} catch (error) {
  core.setFailed(error)
}
