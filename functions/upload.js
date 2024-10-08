export async function onRequest({ request }) {
  const { method } = request
  const formData = await request.formData()
  const imgFile = formData.get('file')
  // 创建 FormData 对象
  const body = new FormData()
  body.append('image', imgFile)
  return fetch(`https://api.imgur.com/3/upload?client_id=546c25a59c58ad7`, {
    method,
    headers: {
      ...request.headers,
      cookie:
        'postpagebeta=1; ana_client_session_id=0f1636f6-5d0e-46eb-9eaf-2f40f588b1f6; is_emerald=0; ana_id=9cc17386-cdfd-42af-84eb-d68787d16879; _gid=GA1.2.635425433.1728394020; m_section=hot; m_sort=time; _lr_env=noEnvelope; retina=0; SESSIONDATA=%7B%22sessionCount%22%3A1%2C%22sessionTime%22%3A1728394029867%7D; IMGURUIDJAFO=09e538804db3d6337f8151a04a7ab8a4232cda3e1d54538fdfcf437f3b429139; authautologin=79e89c4204d3dd40c8895ec7824447bc%7EWDW8EZa77Tg41hW6qlq6GSY4ghVOWSIQ; IMGURSESSION=072ffd009519f9882492552131653777; just_logged_in=1; accesstoken=54fe0d6c25fb99ebc4d24732f7c58c514cee32b6; is_authed=1; user_id=185466223; is_just_signed_in=1; _nc=1; postpagebetalogged=1; _ga_1HL8WM6LBS=GS1.1.1728393631.2.1.1728394062.0.0.0; _ga=GA1.1.94771482.1728394020; _ga_N9VZ79TB1D=GS1.2.1728394025.1.1.1728394062.0.0.0; mp_d7e83c929082d17b884d6c71de740244_mixpanel=%7B%22distinct_id%22%3A%20185466223%2C%22%24device_id%22%3A%20%221926c4fee42fe5-065776ae191be3-4c657b58-384000-1926c4fee42fe5%22%2C%22signed_in%22%3A%20true%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fimgur.com%2Fa%2F8iBVcIj%22%2C%22%24initial_referring_domain%22%3A%20%22imgur.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22imgur_platform%22%3A%20%22desktop%20web%22%2C%22version_name%22%3A%20%220cfe213%22%2C%22user%20agent%22%3A%20%22Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F129.0.0.0%20Safari%2F537.36%20Edg%2F129.0.0.0%22%2C%22legacy%22%3A%20false%2C%22assembly_uid%22%3A%20%229cc17386-cdfd-42af-84eb-d68787d16879%22%2C%22%24user_id%22%3A%20185466223%7D; _awl=2.1728394060.5-fe548e7e95615ce0f89b3a731b58f3d6-6763652d617369612d6561737431-0; FCNEC=%5B%5B%22AKsRol9dncAjzVtzTvsMDAWgARYZSk4X_RBlDwvuSVruS-7rTM1kxulgTAvrwj7fOJ47CB-kBuN0UzkaPbqXpnxaVlDzA7cgpESqoH7jfizrwdq7TENEBbOtjTlzHxx7r4eQMz1Q4S30q3RA2STyPxBgotoSXdGRnA%3D%3D%22%5D%5D',
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body
  })
}
