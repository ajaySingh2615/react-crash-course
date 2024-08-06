import React from 'react'
import { FaStar } from 'react-icons/fa'

const feedbacks = [
  {
    name: 'Jenny Wilson',
    feedback:
      'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    rating: 5,
  },
  {
    name: 'Dianne Russell',
    feedback:
      'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    rating: 4,
  },
  {
    name: 'Devon Lane',
    feedback:
      'Normally wings are wings, but theirs are lean meaty and tender, and the sauces are delicious.',
    rating: 5,
  },
]

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 p-6 rounded mt-6">
      <h2 className="text-lg font-bold mb-4">Customer's Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((fb, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold">{fb.name}</h3>
            <p className="mb-2">{fb.feedback}</p>
            <div className="flex">
              {Array(fb.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              {Array(5 - fb.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-gray-500" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerFeedback
