'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, MapPin, Phone, Mail, ChevronDown, Sparkles, Award, Users, Globe } from 'lucide-react';

export default function LandingPage() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const destinations = [
{ name: 'Bhubaneswar', tag: 'Temple City', image: '/images/bhubaneswar.jpg' },
{ name: 'Puri', tag: 'Beach Paradise', image: '/images/puri.jpg' },
{ name: 'Gopalpur', tag: 'Coastal Retreat', image: '/images/gopalpur.jpg' },
{ name: 'Cuttack', tag: 'Silver City', image: '/images/cuttack.jpg' },
{ name: 'Chilika (Barkul)', tag: 'Lakeside Serenity', image: '/images/chilika.jpg' },
{ name: 'Jharsuguda', tag: 'Gateway West', image: '/images/jharsuguda.jpg' }
];

return (
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-stone-800">
{/* Enhanced Navigation */}
<motion.nav
initial={{ y: -100 }}
animate={{ y: 0 }}
className={`fixed w-full z-50 transition-all duration-500 ${
scrolled
? 'bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 shadow-2xl'
: 'bg-gradient-to-r from-emerald-900/80 via-teal-800/80 to-emerald-900/80 backdrop-blur-xl'
}`}
>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/10 to-emerald-600/10 animate-pulse" />

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex justify-between items-center h-20">
<motion.div
whileHover={{ scale: 1.05, rotate: 1 }}
className="relative h-14 w-44 flex items-center"
>
<div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm" />
<Image
src="/images/logo.avif"
alt="Pipul Hotels & Resorts Logo"
fill
className="object-contain p-2"
priority
/>
</motion.div>

{/* Desktop Menu */}
<div className="hidden md:flex space-x-1 items-center">
{['Banquet', 'Dining', 'Meetings', 'Gallery', 'Destinations', 'Contact'].map((item, index) => (
<motion.a
key={item}
href={`#${item.toLowerCase()}`}
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
whileHover={{ y: -2, scale: 1.05 }}
className="relative px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-all group"
>
{item}
<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
</motion.a>
))}
<motion.button
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.6 }}
whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
whileTap={{ scale: 0.95 }}
className="
relative ml-4 overflow-hidden
bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500
text-white
px-7 py-2.5
text-sm
font-bold
rounded-full
shadow-lg shadow-amber-500/50
hover:shadow-xl hover:shadow-amber-500/60
transition-all duration-300
border-2 border-white/30
"
>
<span className="relative z-10">Book Now</span>
<motion.div
className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600"
initial={{ x: '-100%' }}
whileHover={{ x: 0 }}
transition={{ duration: 0.3 }}
/>
</motion.button>
</div>

{/* Mobile Menu Button */}
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="md:hidden text-white bg-white/20 p-2 rounded-lg backdrop-blur-sm"
>
{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
</div>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
className="md:hidden bg-gradient-to-b from-emerald-900 to-teal-900 border-t border-white/10"
>
<div className="px-4 py-6 space-y-4">
{['Banquet', 'Dining', 'Meetings', 'Gallery', 'Destinations', 'Contact'].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className="block text-sm font-medium text-white/90 hover:text-white hover:translate-x-2 transition-all"
onClick={() => setIsMenuOpen(false)}
>
{item}
</a>
))}
<button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
Book Now
</button>
</div>
</motion.div>
)}
</motion.nav>

{/* Enhanced Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
<motion.div
style={{ scale }}
className="absolute inset-0"
>
<Image
src="/images/cover.jpeg"
alt="Pipul Hotels Hero"
fill
className="object-cover"
priority
/>
</motion.div>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-teal-800/60 to-emerald-900/70 z-10" />

{/* Animated overlay pattern */}
<div className="absolute inset-0 opacity-20 z-10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
</div>

<motion.div
style={{ opacity }}
className="relative z-20 text-center px-4 text-white max-w-5xl"
>
<motion.div
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ duration: 0.8, type: "spring" }}
className="inline-block mb-6"
>
<Sparkles className="w-16 h-16 text-amber-400" />
</motion.div>

<motion.h1
initial={{ y: 50, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.3, duration: 0.8 }}
className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight"
>
<span className="bg-gradient-to-r from-amber-300 via-orange-200 to-amber-300 bg-clip-text text-transparent">
Six Destinations,
</span>
<br />
<span className="text-white">One Spirit</span>
</motion.h1>

<motion.p
initial={{ y: 30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.5 }}
className="text-xl md:text-3xl mb-10 font-light text-emerald-100"
>
Where hospitality meets heritage across Odisha
</motion.p>

<motion.div
initial={{ y: 30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.7 }}
className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>
<motion.button
whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)' }}
whileTap={{ scale: 0.95 }}
className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all border-2 border-white/30"
>
Explore Our Properties
</motion.button>

<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-lg font-bold border-2 border-white/50 hover:bg-white/20 transition-all"
>
Watch Video
</motion.button>
</motion.div>
</motion.div>

<motion.div
animate={{ y: [0, 15, 0] }}
transition={{ repeat: Infinity, duration: 2 }}
className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
>
<ChevronDown size={40} className="text-amber-400" />
</motion.div>
</section>

{/* Stats Section - NEW */}
<section className="py-16 bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
{[
{ icon: Globe, number: '8+', label: 'Locations' },
{ icon: Users, number: '50K+', label: 'Happy Guests' },
{ icon: Award, number: '25+', label: 'Years Experience' },
{ icon: Sparkles, number: '100%', label: 'Satisfaction' }
].map((stat, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="text-center text-white"
>
<stat.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
<h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
<p className="text-emerald-200">{stat.label}</p>
</motion.div>
))}
</div>
</div>
</section>

{/* Enhanced About Section */}
<section className="py-24 px-4 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" />

<div className="max-w-6xl mx-auto relative z-10">
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="text-center mb-16"
>
<motion.div
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
viewport={{ once: true }}
className="inline-block mb-4"
>
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
<Sparkles className="w-10 h-10 text-white" />
</div>
</motion.div>

<h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-emerald-900 via-teal-700 to-emerald-900 bg-clip-text text-transparent mb-6">
About Pipul Hotels & Resorts
</h2>
<div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 mx-auto rounded-full" />
</motion.div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 z-10" />
<Image
src="/images/pool.webp"
alt="Sacred Pipul Tree - Symbol of Pipul Hotels & Resorts"
fill
className="object-cover hover:scale-110 transition-transform duration-700"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="space-y-6 bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
>
<p className="text-lg leading-relaxed text-stone-700">
The name <span className="font-bold text-emerald-800">'Pipul'</span> comes from the sacred fig tree—a timeless symbol of shelter, resilience, and community. Beneath its wide, welcoming canopy, people have gathered for centuries to rest, share stories, and find comfort.
</p>
<p className="text-lg leading-relaxed text-stone-700">
In the same spirit, Pipul Hotels & Resorts creates spaces where every traveller can pause from the journey, connect with others, and feel truly at home. From the heritage charm of temple towns to the serene beauty of Odisha's coastline and lakes, our presence spans six distinct destinations.
</p>
<p className="text-lg leading-relaxed text-stone-700">
Each location has its own unique character, yet all are united by the same spirit of hospitality, care, and authenticity. Here, you'll find not just a room, but a space where memories grow.
</p>
</motion.div>
</div>
</div>
</section>

{/* Enhanced Destinations Section */}
<section id="destinations" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 animate-pulse" />
</div>

<div className="max-w-7xl mx-auto relative z-10">
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-16"
>
<h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
Our Destinations
</h2>
<p className="text-xl text-emerald-200 max-w-2xl mx-auto">
Discover the beauty and culture of Odisha through our carefully chosen locations
</p>
<div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
</motion.div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
{[
{ title: 'Pipul Padmaja Premium Hotel & Convention, Bhubaneswar', img: '/images/padmajabhu.webp', desc: 'Step inside our story—explore the moments, memories, and magic that make every stay unforgettable.' },
{ title: 'Pipul Padmaja Pride, Cuttack', img: '/images/cuttack.webp', desc: 'Explore our gallery featuring cosy rooms, vibrant interiors, and inviting exteriors capturing warmth & hospitality.' },
{ title: 'Pipul Sea View Resort, Gopalpur', img: '/images/gopalpur.webp', desc: 'Thoughtfully designed rooms, inviting dining spaces, and delightful offerings for your coastal getaway.' },
{ title: 'Pipul Ocean View Resort, Puri', img: '/images/DSC04542_2952c417.webp', desc: 'Stylish interiors, rooftop infinity pool, thoughtful touches that spark your coastal getaway dreams.' },
{ title: 'Pipul Odi Art Museum Resort, Barkul', img: '/images/barkull.webp', desc: 'Serene views, elegant cottages, cultural artefacts, and moments of pure relaxation.' },
{ title: 'Pipul Padmaja Beach Inn, Puri', img: '/images/beachinn.webp', desc: 'Elegant spaces, vibrant interiors, warm hospitality — every frame reflects comfort & charm.' },
{ title: 'Pipul Hotel And Resort, Puri', img: '/images/DSC_3031.webp', desc: 'Wander through our gallery and let every frame whisk you away to breezy mornings, golden sunsets.' },
{ title: 'Pipul Utkal Continental, Jharsuguda', img: '/images/front_dea1c82f.webp', desc: 'Browse through our gallery and discover the elegance of our hotel—from refined interiors.' }
].map((dest, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
whileHover={{ y: -10 }}
className="group"
>
<div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30 group-hover:border-amber-400 transition-all duration-300">
<Image
src={dest.img}
alt={dest.title}
fill
className="object-cover group-hover:scale-110 transition-transform duration-700"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
<div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg">
Premium
</div>
</div>

<h3 className="mt-6 text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
{dest.title}
</h3>

<p className="text-emerald-200 mt-3 leading-relaxed">
{dest.desc}
</p>

<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.95 }}
  className="mt-3 px-3 py-1.5 
             bg-green-600 text-green-100 
             rounded-md border border-green-800
             font-semibold text-sm
             hover:bg-green-700 transition-all shadow-sm"
>
  VIEW IMAGES
</motion.button>


</motion.div>
))}
</div>
</div>
</section>

{/* Enhanced Banquet Section */}
<section id="banquet" className="py-24 px-4 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl" />

<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="space-y-6"
>
<div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-full text-white text-sm font-bold mb-4">
Premium Events
</div>

<h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
Banquet & Events
</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />

<p className="text-lg text-stone-700 leading-relaxed">
Host your special moments in our elegant banquet halls. From intimate gatherings to grand celebrations, our versatile event spaces are designed to bring your vision to life with impeccable service and attention to detail.
</p>

<ul className="space-y-4 text-stone-700">
{[
'Flexible seating arrangements for 50-500 guests',
'State-of-the-art audio-visual equipment',
'Customized catering and décor services'
].map((item, index) => (
<motion.li
key={index}
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="flex items-start group hover:translate-x-2 transition-transform"
>
<span className="text-2xl mr-3 text-amber-500">✦</span>
<span className="text-lg">{item}</span>
</motion.li>
))}
</ul>

<motion.button
whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
whileTap={{ scale: 0.95 }}
className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-xl"
>
View Banquet Spaces
</motion.button>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
>
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 z-10 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all" />
<Image
src="/images/hall.webp"
alt="Elegant Banquet Hall at Pipul Hotels"
fill
className="object-cover group-hover:scale-110 transition-transform duration-700"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</motion.div>
</div>
</div>
</section>

{/* Enhanced Dining Section */}
<section id="dining" className="py-24 px-4 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-20">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse" />
</div>

<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 order-2 md:order-1 group"
>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 z-10 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all" />
<Image
src="/images/rest.webp"
alt="Fine Dining Restaurant at Pipul Hotels"
fill
className="object-cover group-hover:scale-110 transition-transform duration-700"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="space-y-6 order-1 md:order-2"
>
<h2 className="text-4xl md:text-5xl font-serif font-bold">
Dining Excellence
</h2>
<div className="w-20 h-1 bg-emerald-300" />
<p className="text-lg text-emerald-50 leading-relaxed">
Savor authentic Odia cuisine alongside international favorites in our inviting restaurants. Each dish is crafted with locally sourced ingredients and served with the warmth of traditional hospitality.
</p>
<ul className="space-y-4 text-emerald-50">
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-300 mr-3 text-xl">✦</span>
<span>Multi-cuisine restaurants at every property</span>
</li>
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-300 mr-3 text-xl">✦</span>
<span>Traditional Odia delicacies and regional specialties</span>
</li>
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-300 mr-3 text-xl">✦</span>
<span>In-room dining and customized menus available</span>
</li>
</ul>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-white text-emerald-900 px-10 py-4 rounded-full hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
>
Explore Menus
</motion.button>
</motion.div>
</div>
</div>
</section>

{/* Meetings Section */}
<section id="meetings" className="py-24 px-4 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="space-y-6"
>
<h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900">
Business Meetings
</h2>
<div className="w-20 h-1 bg-emerald-700" />
<p className="text-lg text-stone-700 leading-relaxed">
Conduct productive meetings in our well-equipped conference rooms. Whether it's a board meeting, training session, or corporate event, we provide the perfect environment for success.
</p>
<ul className="space-y-4 text-stone-700">
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-700 mr-3 text-xl">✦</span>
<span>Modern conference facilities with high-speed Wi-Fi</span>
</li>
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-700 mr-3 text-xl">✦</span>
<span>Projectors, screens, and video conferencing setup</span>
</li>
<li className="flex items-start group hover:translate-x-2 transition-transform">
<span className="text-emerald-700 mr-3 text-xl">✦</span>
<span>Business center and secretarial services</span>
</li>
</ul>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-emerald-800 text-white px-10 py-4 rounded-full hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl"
>
Request Proposal
</motion.button>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
>
<Image
src="/images/meeting.jpg"
alt="Modern Conference Room at Pipul Hotels"
fill
className="object-cover"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</motion.div>
</div>
</div>
</section>

{/* Gallery Section */}
<section id="gallery" className="py-24 px-4 bg-stone-50">
<div className="max-w-7xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-16"
>
<h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
Gallery
</h2>
<p className="text-xl text-stone-600">
Glimpses of comfort, elegance, and memorable moments
</p>
</motion.div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{/* Image 1 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.05 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/cuttack.webp"
alt="Gallery Image 1"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

{/* Image 2 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.10 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/barkul.webp"
alt="Gallery Image 2"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

{/* Image 3 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.15 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/RESTAURNAT_3_164a09fc.webp"
alt="Gallery Image 3"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

{/* Image 4 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.20 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/Banquet_Ocean_view_c164b86b.avif"
alt=""
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

{/* Image 5 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.25 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/padmajapuri.webp"
alt="Gallery Image 5"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

{/* Image 6 */}
<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.30 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/KING_RAJ_HALL_5_f1ae62ed.webp"
alt="Gallery Image 6"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.30 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/hall.webp"
alt="Gallery Image 7"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.30 }}
whileHover={{ scale: 1.05, y: -5 }}
className="group cursor-pointer"
>
<div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300">
<Image
src="/images/P1658476_14b0422b.webp"
alt="Gallery Image 8"
fill
className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</motion.div>

</div>
</div>
</section>


{/* CTA Section */}
<section className="py-24 px-4 bg-emerald-900 text-white">
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="max-w-4xl mx-auto text-center"
>
<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
Experience the Pipul Spirit
</h2>
<p className="text-xl text-emerald-50 mb-8">
Book your stay and discover why every journey finds its home beneath our canopy
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-50 transition-colors">
Book Your Stay
</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
Contact Us
</button>
</div>
</motion.div>
</section>

{/* Footer */}
<footer id="contact" className="bg-stone-900 text-stone-300 py-16 px-4">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
<div>
<h3 className="text-2xl font-serif font-bold text-white mb-4">
Pipul Hotels & Resorts
</h3>
<p className="text-sm leading-relaxed">
Creating spaces where memories grow across Odisha's most beautiful destinations.
</p>
</div>

<div>
<h4 className="font-semibold text-white mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a href="#banquet" className="hover:text-emerald-400 transition-colors">Banquet</a></li>
<li><a href="#dining" className="hover:text-emerald-400 transition-colors">Dining</a></li>
<li><a href="#meetings" className="hover:text-emerald-400 transition-colors">Meetings</a></li>
<li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-4">Destinations</h4>
<ul className="space-y-2 text-sm">
{destinations.slice(0, 4).map((dest) => (
<li key={dest.name}>
<a href="#destinations" className="hover:text-emerald-400 transition-colors">
{dest.name}
</a>
</li>
))}
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start">
<Phone size={16} className="mr-2 mt-1 text-emerald-400" />
<span>+91 XXXXX XXXXX</span>
</li>
<li className="flex items-start">
<Mail size={16} className="mr-2 mt-1 text-emerald-400" />
<span>info@pipulhotels.com</span>
</li>
<li className="flex items-start">
<MapPin size={16} className="mr-2 mt-1 text-emerald-400" />
<span>Odisha, India</span>
</li>
</ul>
</div>
</div>

<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-sm">
<p>&copy; 2024 Pipul Hotels & Resorts. All rights reserved.</p>
</div>
</footer>
</div>
);
}
