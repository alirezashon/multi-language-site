/** @format */

import { useState } from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import { SignInoghlia } from '../../../Components/Auth'
import Router from 'next/router'

const Login: React.FC = () => {
	const [phone, setPhone] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [isLoading, setIsLoading] = useState(false)

	
	const submiter = async () => {
		;;(await SignInoghlia(setIsLoading, `${phone}`, `${password}`)) ===
			'S!A@k%s$e^x%f^u*l^' && Router.push('/AnUIntegrationalTotheShopingtime')
	}

	return (
		<>
		
			<div className={styles.container}>
				<div className={`${styles.formBox}  ${isLoading && styles.animate}`}>
					{!isLoading && (
						<>
							<Image
								className={styles.logo}
								src={'/images/icon.png'}
								width={1111}
								height={1111}
								alt='Kalimogo'
							/>
							<div className={styles.formShadow}>
								<form
									className={styles.formInnerBox}
									onSubmit={submiter}>
									<div className={styles.formRow}>
										<label> شماره موبایل</label>
										<input
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
 											placeholder='نام کاربری ...'
											required
										/>
									</div>
									<div className={styles.formRow}>
										<label>رمز عبور </label>
										<input
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											type='password'
											placeholder='رمز عبور ...'
											required
										/>
									</div>
									<div className={styles.buttonBox}>
										<input
											type='submit'
											value={'ورود'}
											className={styles.submit}
										/>
									</div>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}
export default Login
