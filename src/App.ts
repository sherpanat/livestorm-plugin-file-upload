import { Chat, Modal } from '@livestorm/plugin'

export default function() {
  Chat.Buttons.registerChatShareButton({
    label: 'Share a Document',
    icon: 'file',
    onClick: () => {
      Modal.showIframe({
        template: '<p>{{ content }}</p>',
        variables: { content: 'hello' },
        onMessage: (message) => { }
      })
    }
  })
}
