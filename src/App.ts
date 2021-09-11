import Livestorm from '@livestorm/plugin'

export default function() {
  Livestorm.Chat.Buttons.registerChatShareButton({
    label: 'Share a Document',
    icon: 'file',
    onClick: () => console.log('someone clicked this button')
  })
}
