import React from "react";
import { useNavigate } from "react-router";

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6 flex items-center justify-center">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    About <span className="text-blue-600">Author Hub</span>
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    <strong>Author Hub</strong> is a modern book publishing platform designed
                    for writers, editors, and readers. Our mission is to simplify the
                    publishing journey — from writing and collaboration to sharing your
                    stories with the world.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            ✍️ Write Seamlessly
                        </h3>
                        <p className="text-gray-600">
                            Create, edit, and format your manuscripts in an intuitive online
                            editor built for authors.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            🤝 Collaborate Easily
                        </h3>
                        <p className="text-gray-600">
                            Work with editors, co-authors, or beta readers — all in real time.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            🌍 Publish Instantly
                        </h3>
                        <p className="text-gray-600">
                            Share your work with the world through digital publishing and
                            customizable author pages.
                        </p>
                    </div>
                </div>

                <p className="text-gray-700 mb-10">
                    Whether you’re an aspiring writer or a professional author, Author Hub
                    gives you the tools to focus on what matters most — your creativity and
                    storytelling.
                </p>

                <button
                    onClick={() => navigate("/login")}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition font-medium"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default About;
