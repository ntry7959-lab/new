// file uploadCatbox.js
const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

/**
 * Upload image to catbox.moe
 * @param {Buffer} buffer Image Buffer
 */
async function uploadCatbox(buffer) {
  let { ext } = await fromBuffer(buffer)
  let bodyForm = new FormData()
  bodyForm.append("fileToUpload", buffer, "file." + ext)
  bodyForm.append("reqtype", "fileupload")

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  })

  let data = await res.text()
  return data
}

module.exports = { uploadCatbox }