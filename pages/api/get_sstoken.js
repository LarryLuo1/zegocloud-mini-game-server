export default function handler(req, res) {
  res.status(200).json({ ret_code: 1, ret_msg: '', sdk_error_code: 1005, data: {ss_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjMiLCJleHAiOjE2MzA0MTc4NjEsImFwcF9pZCI6ImFwcElEIn0.vk6cX4dGHJ-du6tKAMqy-qoD9xB_GV2Dh356cZgMQxM', expire_date: 1630417861359} })
}