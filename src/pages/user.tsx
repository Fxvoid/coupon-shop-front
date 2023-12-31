import Footer from '@/components/Blocks/Footer/Footer'
import UserHeader from '@/components/Blocks/Header/UserHeader/UserHeader'
import UserMain from '@/components/Blocks/Main/UserMain/UserMain'
import UserContainer from '@/components/Containers/UserContainer/UserContainer'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from './../components/Blocks/Main/UserMain/UserMain.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '@/redux/tokenSlice'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface userPageProps{
  token: string;
}

const user:NextPage<userPageProps> = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  let status:string;
  const [isSpecial, setIsSpecial] = useState<boolean>(false)
  useEffect(() => {
    const isCode = localStorage.getItem('special')
    if (isCode){
      setIsSpecial(true)
    } else {
      setIsSpecial(false)
    }
    const token = localStorage.getItem('token')
    if (token){
      dispatch(setToken(token))
      status = 'authenticated'
    } else {
      status = 'unauthenticated'
    }
    if (status === 'unauthenticated'){
      router.push('/login')
    }
  }, [])
  return (
    <>
    <Head>
      <title>Parcus | Пользователь</title>
      <link rel="icon" href="/Frame 22.png" />
    </Head>
    <UserContainer>
        <UserHeader />
        <UserMain>
            <h2 className={styles.name}>Настройки</h2>
            <section>
              <form action="" className={styles.info}>
                <div className={styles.info__item}>
                  <p>Ваш номер телефона</p>
                  <input type="tel" value={'test'} disabled/>
                </div>
                <div className={styles.info__item}>
                  <p>Ваша электронная почта</p>
                  <input type="email" />
                </div>
                <div className={styles.info__item}>
                  <p>Ваш регион</p>
                  <select className={styles.locations} value='Москва' name="Москва" id="">
                    
                    <option value="Москва">Москва</option>
                  </select>
                </div>
                <button type='button' className={styles.save}>Сохранить изменения</button>
              </form>
            </section>
        </UserMain>
    </UserContainer>
    <Footer />
    </>
  )
}

export default user