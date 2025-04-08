import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SendHorizonal } from 'lucide-react';
import { FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const formRef = useRef();
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            'service_jqparqr',
            'template_6s65hot',
            formRef.current,
            'w9pGzygFM3tFRICz3'
        )
            .then(() => {
                alert('✅ Message sent successfully!');
                formRef.current.reset();
                setSending(false);
            })
            .catch((error) => {
                console.error('❌ EmailJS Error:', error);
                alert('Something went wrong.');
                setSending(false);
            });
    };

    return (
        <section className="relative h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center px-4">
            {/* Backgrounds */}
            <div className="absolute inset-0 motherboard-bg w-screen h-screen z-0" />
            <div className="absolute inset-0 circuit-overlay z-0" />

            {/* Form Card */}
            <div className="relative z-10 w-full max-w-md bg-[#0f0f0f]/60 border border-[#39FF14]/30 rounded-2xl shadow-[0_0_25px_#39FF14] px-6 py-10 text-center backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-[#39FF14] drop-shadow-[0_0_10px_#39FF14]">
                    Contact Me
                </h2>

                {/* Center the form in the card */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="mx-auto w-full max-w-[90%] flex flex-col items-center gap-6 text-left text-neon"
                >
                    <div className="w-full space-y-1">
                        <label htmlFor="title" className="text-sm text-[#39FF14]/80">Subject</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Subject / Title"
                            required
                            className="w-full p-3 bg-transparent border border-neon rounded placeholder:text-neon/50 text-neon focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 transition"
                        />
                    </div>

                    <div className="w-full space-y-1">
                        <label htmlFor="name" className="text-sm text-[#39FF14]/80">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 bg-transparent border border-neon rounded placeholder:text-neon/50 text-neon focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 transition"
                        />
                    </div>

                    <div className="w-full space-y-1">
                        <label htmlFor="time" className="text-sm text-[#39FF14]/80">What time you reached out?</label>
                        <input
                            type="text"
                            name="time"
                            id="time"
                            placeholder="e.g. 9:30am"
                            className="w-full p-3 bg-transparent border border-neon rounded placeholder:text-neon/50 text-neon focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 transition"
                        />
                    </div>

                    <div className="w-full space-y-1">
                        <label htmlFor="email" className="text-sm text-[#39FF14]/80">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email address"
                            required
                            className="w-full p-3 bg-transparent border border-neon rounded placeholder:text-neon/50 text-neon focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 transition"
                        />
                    </div>

                    <div className="w-full space-y-1">
                        <label htmlFor="message" className="text-sm text-[#39FF14]/80">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="w-full p-3 bg-transparent border border-neon rounded placeholder:text-neon/50 text-neon focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 transition"
                        ></textarea>
                    </div>

                    {/* Styled Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={sending}
                            className="flex items-center bg-transparent gap-2 border-0 text-neon bg-[#39FF14]/80 px-5 py-2 transition-all duration-300 font-medium cursor-pointer drop-shadow-[0_0_8px_#39FF14] hover:drop-shadow-[0_0_12px_#39FF14] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {sending ? 'Sending...' : ''}
                            {!sending && <SendHorizonal className="w-4 h-4" />}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
