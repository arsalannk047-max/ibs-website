'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquarePlus, X } from 'lucide-react';

type Review = {
  id: number;
  name: string;
  rating: number;
  message: string;
  course: string | null;
  created_at: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async () => {
    if (!name || !rating || !message) {
      setStatus('error');
      setErrorMsg('Please fill all required fields and select a rating.');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, message, course }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setName('');
        setRating(0);
        setCourse('');
        setMessage('');
        fetchReviews();
        setTimeout(() => {
          setShowForm(false);
          setStatus('idle');
        }, 1500);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 text-lg mb-6">Real feedback from our IBS community</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
          >
            <MessageSquarePlus size={20} />
            Leave a Review
          </button>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-500">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">&quot;{review.message}&quot;</p>
                <div className="border-t pt-3">
                  <p className="font-bold text-blue-900">{review.name}</p>
                  {review.course && <p className="text-gray-500 text-xs">{review.course}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => { setShowForm(false); setStatus('idle'); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">Share Your Experience</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />

              <input
                type="text"
                placeholder="Course / Class (optional)"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />

              <div>
                <p className="text-sm text-gray-600 mb-2">Your Rating</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star
                        size={32}
                        className={
                          star <= (hoverRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Write your review..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
              />

              {status === 'success' && (
                <div className="text-green-700 bg-green-50 p-3 rounded-xl text-sm">
                  Thank you! Your review has been posted.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Submitting...' : 'Submit Review'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}