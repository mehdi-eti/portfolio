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
			setForm({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id='contact' className='flex-center section-padding px-4 sm:px-6 md:px-10'>
			<div className='w-full max-w-6xl mx-auto'>
				<TitleHeader title='Get in Touch – Let’s Connect' sub='💬 Have questions or ideas? Let’s talk! 🚀' />

				<div className='mt-12 grid grid-cols-1 xl:grid-cols-12 gap-8'>
					{/* Form Section */}
					<div className='xl:col-span-5'>
						<div className='card-border rounded-xl p-6 sm:p-10 bg-white/5'>
							<form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-6'>
								<div>
									<label htmlFor='name' className='block text-sm mb-1'>
										Your Name
									</label>
									<input
										required
										id='name'
										type='text'
										name='name'
										value={form.name}
										onChange={handleChange}
										className='w-full px-3 py-2 rounded-md bg-white/10 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm'
									/>
								</div>

								<div>
									<label htmlFor='email' className='block text-sm mb-1'>
										Your Email
									</label>
									<input
										required
										id='email'
										type='email'
										name='email'
										value={form.email}
										onChange={handleChange}
										className='w-full px-3 py-2 rounded-md bg-white/10 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm'
									/>
								</div>

								<div>
									<label htmlFor='message' className='block text-sm mb-1'>
										Your Message
									</label>
									<textarea
										rows={5}
										required
										id='message'
										name='message'
										value={form.message}
										onChange={handleChange}
										className='w-full px-3 py-2 rounded-md bg-white/10 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm'
									/>
								</div>

								<button type='submit'>
									<div className='cta-button group'>
										<div className='bg-circle' />
										<p className='text'>{loading ? "Sending..." : "Send Message"}</p>
										<div className='arrow-wrapper'>
											<img src='/images/arrow-down.svg' alt='arrow' />
										</div>
									</div>
								</button>
							</form>
						</div>
					</div>

					{/* Visual / Canvas */}
					<div className='xl:col-span-7 min-h-80 sm:min-h-96'>
						<div className='bg-[#cd7c2e] w-full h-full rounded-2xl overflow-hidden hover:cursor-grab'>
							<ContactExperience />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
