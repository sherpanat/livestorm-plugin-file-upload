import { Chat, Modal } from '@livestorm/plugin'

const fileTransferTemplate = require('./file-transfer.html').default
const fileDownloadTemplate = require('./file-download.html').default

export default function() {
  Chat.Buttons.registerChatShareButton({
    label: 'Share a Document',
    icon: 'file',
    onClick: () => {
      Modal.showIframe({
        template: fileTransferTemplate + fileDownloadTemplate,
        onMessage: ({ fileUrl, fileName, fileSize }) => {
          Chat.broadcast({
            text: `Shared a file <${fileName}> ${fileSize}mo`,
            html: `<a target="_blank" href="${fileUrl}" download class="btn btn-primary">Download</button> ${fileDownloadTemplate}`
          })
        }
      })
    }
  })
}
