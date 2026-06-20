'use client';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '923462776747';
  const message = "Hi! I'm interested in IBS courses and would like more information.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl transition-shadow"
    >
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
      />
      <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 relative z-10">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.347-.379.521-.568.174-.189.231-.324.347-.54.115-.217.057-.408-.014-.567-.072-.16-.601-1.413-.829-1.943-.227-.524-.453-.453-.624-.461-.157-.008-.358-.01-.55-.01-.197 0-.521.072-.793.36-.272.288-1.04 1.02-1.04 2.486 0 1.467 1.066 2.886 1.215 3.085.148.198 2.064 3.157 5.005 4.301 2.94 1.143 2.94.762 3.473.715.533-.048 1.758-.715 2.006-1.405.249-.69.249-1.282.174-1.406-.074-.124-.27-.198-.568-.346z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.054 2.284 7.034L.789 23.211l4.176-1.495C6.946 23.155 9.387 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.001c-2.355 0-4.539-.733-6.334-1.985l-.453-.298-4.45 1.594 1.616-4.293-.326-.484A9.957 9.957 0 012.001 12C2.001 6.486 6.486 2.001 12 2.001S22 6.486 22 12s-4.486 9.999-10 9.999z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;