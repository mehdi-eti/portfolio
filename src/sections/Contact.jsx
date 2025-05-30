/** @format */

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			);

			// Reset form and stop loading
			setForm({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error); // Optional: show toast
		} finally {
			setLoading(false); // Always stop loading, even on error
		}
	};

	return (
		<section id='contact' className='flex-center section-padding'>
			<div className='w-full h-full md:px-10 px-5'>
				<TitleHeader title='تماس با من' sub='💬 سوالی یا ایده‌ای دارید؟ بیایید صحبت کنیم! 🚀' />
				<div className='grid-12-cols mt-16'>
					<div className='xl:col-span-7 min-h-96'>
						<div className='bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden'>
							<ContactExperience />
						</div>
					</div>
					<div className='xl:col-span-5'>
						<div className='flex-center card-border rounded-xl p-10'>
							<form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7'>
								<div>
									<label htmlFor='name' className='text-end'>
										اسم شما
									</label>
									<input dir='rtl' required id='name' type='text' name='name' value={form.name} onChange={handleChange} />
								</div>

								<div>
									<label htmlFor='email' className='text-end'>
										ایمیل شما
									</label>
									<input required id='email' type='email' name='email' value={form.email} onChange={handleChange} />
								</div>

								<div>
									<label htmlFor='message' className='text-end'>
										پیام شما
									</label>
									<textarea
										dir='rtl'
										rows='5'
										required
										id='message'
										name='message'
										value={form.message}
										onChange={handleChange}
									/>
								</div>

								<button type='submit'>
									<div className='cta-button group'>
										<div className='bg-circle' />
										<p className='text'>{loading ? "درحال ارسال..." : "ارسال پیام"}</p>
										<div className='arrow-wrapper'>
											<img src='/images/arrow-down.svg' alt='arrow' />
										</div>
									</div>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
