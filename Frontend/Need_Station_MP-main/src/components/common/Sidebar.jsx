import { BarChart2, DollarSign, Menu, Settings, CheckCircle, Clock, House } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Home", icon: House, color: "#6EE7B7", href: "/" },
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/helper/overview",
	},
	{ name: "Upcoming Tasks", icon: Clock, color: "#8B5CF6", href: "/helper/upcoming-tasks" },
	{ name: "Completed Tasks", icon: CheckCircle, color: "#EC4899", href: "/helper/completed-task" },
	{ name: "Earning and payment", icon: DollarSign, color: "#F59E0B", href: "/helper/earnings" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/helper/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-68" : "w-24"
			}`}
			animate={{ width: isSidebarOpen ? 286 : 100 }}
		>
			<div className='h-full bg-gray-950 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
			
				<motion.button 
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>    
					<Menu size={24} /> 
				 </motion.button> 

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-cyan-400 transition-colors mb-2 hover:text-black'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;
