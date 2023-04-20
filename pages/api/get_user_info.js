export default function handler(req, res) {
  res.status(200).json({ ret_code: 0, ret_msg: '', sdk_error_code: 0, data: {uid: '12312', nick_name: '萌萌', avatar_url: 'https://icon.png?128*128', gender: 'female', is_ai: 0}})
}