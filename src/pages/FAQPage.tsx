import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string | ReactElement;
}

interface FAQCategory {
  id: string;
  title: string;
  subtitle?: string;
  faqs: FAQ[];
}

const FAQPage: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('spirulina');

  useEffect(() => {
    document.title = 'FAQ | Eseentia';
    window.scrollTo(0, 0);
  }, []);

  const faqCategories: FAQCategory[] = [
    {
      id: 'supergreens-bundle',
      title: 'Eseentia Ultimate Supergreens Bundle',
      subtitle: undefined,
      faqs: [
        {
          id: 1,
          question: 'What results can I expect from the Supergreens Bundle, and how soon?',
          answer: (
            <>
              <p className="mb-3">
                Most users notice increased energy, better digestion, and improved skin clarity within <strong>2–3 weeks</strong> of consistent daily use. Deeper benefits like detoxification, immunity strengthening, and hormonal balance may be visible within <strong>30–60 days</strong>.
              </p>
              <p className="mb-3 font-semibold">Consistency is key.</p>
              <p>
                Our bundle is designed for daily wellness, not overnight change — but results are real and lasting.
              </p>
            </>
          )
        },
        {
          id: 2,
          question: 'Are the products safe for long-term use?',
          answer: (
            <>
              <p>
                Yes, all ingredients are <strong>100% organic, non-GMO, vegan, and free from heavy metals and harmful additives.</strong> These supergreens have been safely consumed for centuries, and clinical studies support long-term safety within recommended dosages.
              </p>
            </>
          )
        },
        {
          id: 3,
          question: 'Can I mix all the powders together in one drink?',
          answer: (
            <>
              <p>
                Absolutely. In fact, combining spirulina, moringa, barley grass, wheatgrass, and alfalfa creates a <strong>synergistic effect</strong> — enhancing nutrient absorption and delivering a full-spectrum green boost. Just ensure you follow the suggested serving size (1–1.5 tsp per powder, max 5–7g total daily for beginners).
              </p>
            </>
          )
        },
        {
          id: 4,
          question: "What's better — capsules or powders?",
          answer: (
            <>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Powders</strong> are ideal for smoothies, juices, or morning drinks. They're absorbed faster and work well for people who enjoy blending.</li>
                <li><strong>Capsules</strong> are perfect for on-the-go lifestyles and for those sensitive to the taste of green powders.</li>
              </ul>
              <p className="mt-2">Many users <strong>combine both formats</strong> for flexibility.</p>
            </>
          )
        },
        {
          id: 5,
          question: 'Are these products certified?',
          answer: (
            <>
              <p>Yes. Every product is:</p>
              <ul className="list-none space-y-2 mt-2">
                <li>✅ <strong>USDA Organic</strong></li>
                <li>✅ <strong>India Organic Certified</strong></li>
                <li>✅ <strong>Lab-tested</strong> for purity, potency, and safety</li>
              </ul>
              <p className="mt-2">Certificates are available on request or from our website product pages.</p>
            </>
          )
        },
        {
          id: 6,
          question: 'Is this safe for kids, pregnant women, or people with medical conditions?',
          answer: (
            <>
              <p>These are natural, food-based products — but we recommend you <strong>consult a healthcare professional</strong> if:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>You are <strong>pregnant or breastfeeding</strong></li>
                <li>You are taking medication or have a <strong>chronic illness</strong></li>
                <li>You plan to give these products to <strong>children under 12</strong></li>
              </ul>
            </>
          )
        },
        {
          id: 7,
          question: 'Will this help with weight loss?',
          answer: (
            <>
              <p>Yes — indirectly. The supergreens support:</p>
              <ul className="list-none space-y-2 mt-2">
                <li>✔ Detox & liver cleansing</li>
                <li>✔ Hormonal balance</li>
                <li>✔ Digestive efficiency</li>
                <li>✔ Appetite regulation</li>
              </ul>
              <p className="mt-2">All of which can contribute to <strong>natural, healthy weight management</strong> when paired with proper diet and activity.</p>
            </>
          )
        },
        {
          id: 8,
          question: 'Do you ship internationally?',
          answer: (
            <>
              <p>Yes, we offer <strong>worldwide shipping</strong> with delivery in 7–14 days to most countries. All products are <strong>packaged securely</strong> and come with customs-friendly documentation.</p>
            </>
          )
        },
        {
          id: 9,
          question: 'Can I take all products together every day?',
          answer: (
            <>
              <p>Yes. That's what the bundle is designed for. You can safely take all 5 superfoods daily — in powder or capsule form — within recommended dosages.</p>
            </>
          )
        },
        {
          id: 10,
          question: 'How do I store these products?',
          answer: (
            <>
              <p>Keep them in a <strong>cool, dry place away from sunlight.</strong> Reseal pouches and bottles after every use to preserve freshness and potency.</p>
            </>
          )
        }
      ]
    },
    {
      id: 'spirulina',
      title: 'Spirulina FAQs',
      subtitle: 'For Powder, Capsules & Tablets',
      faqs: [
        {
          id: 1,
          question: 'What is Spirulina?',
          answer: (
            <>
              <p className="mb-3">
                Spirulina is a nutrient-dense blue-green algae (cyanobacteria) that is considered one of the world's most powerful superfoods. It is rich in plant-based protein, vitamins (like B1, B2, B3), iron, beta-carotene, chlorophyll, and essential fatty acids.
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Endorsed by WHO and NASA as a complete food source.
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">▸</span>
                  Clinical studies have shown it supports immune health, detoxification, and energy levels.
                </li>
              </ul>
            </>
          )
        },
        {
          id: 2,
          question: 'What are the main health benefits of Spirulina?',
          answer: (
            <>
              <p className="mb-3">Spirulina may help:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Boost immunity and energy levels</li>
                <li>Reduce oxidative stress and inflammation</li>
                <li>Support healthy blood sugar and cholesterol levels</li>
                <li>Enhance muscle strength and endurance</li>
                <li>Aid in detoxification and liver health</li>
                <li>Improve skin, hair, and overall vitality</li>
              </ul>
              <p className="mt-3 text-sm italic">Sources: Healthline, PubMed, NCBI, WebMD</p>
            </>
          )
        },
        {
          id: 3,
          question: 'How should I take Spirulina—powder, capsule, or tablet?',
          answer: (
            <>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <strong className="mr-2">Powder:</strong>
                  Mix 1–2 tsp in smoothies, juices, or water.
                </li>
                <li className="flex items-start">
                  <strong className="mr-2">Capsules/Tablets:</strong>
                  Take 2–6 tablets daily or as recommended by your nutritionist.
                </li>
              </ul>
              <p className="mt-3">All forms provide the same core benefits; it's a matter of convenience and preference.</p>
            </>
          )
        },
        {
          id: 4,
          question: 'Is Spirulina safe for everyone?',
          answer: (
            <>
              <p className="mb-3">
                Generally, yes. Spirulina is considered safe when taken within recommended doses. However, it should be <strong>avoided or used with caution</strong> if:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You have <strong>autoimmune conditions</strong> (e.g., lupus, MS, rheumatoid arthritis)</li>
                <li>You are on <strong>immune-suppressing medications</strong></li>
                <li>You have <strong>PKU (phenylketonuria)</strong></li>
              </ul>
              <p className="mt-3">Always consult your healthcare provider if you are pregnant, nursing, or taking medications.</p>
            </>
          )
        },
        {
          id: 5,
          question: 'Are there any side effects?',
          answer: (
            <>
              <p className="mb-3">Most people tolerate Spirulina well. Mild side effects may include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Digestive discomfort</li>
                <li>Headache</li>
                <li>Dizziness (in rare cases)</li>
              </ul>
              <p className="mt-3">These usually subside as your body adjusts.</p>
              <p className="mt-3 text-sm bg-yellow-50 p-3 rounded">
                ⚠️ Avoid spirulina sourced from unverified suppliers, as it may be contaminated with heavy metals or microcystins.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'moringa',
      title: 'Moringa FAQs',
      subtitle: 'For Powder & Capsules',
      faqs: [
        {
          id: 1,
          question: 'What is Moringa?',
          answer: (
            <>
              <p className="mb-3">
                Moringa (Moringa oleifera), also called the "Miracle Tree," is a plant native to India and parts of Africa and Asia. Its leaves are rich in vitamins A, C, and E, calcium, potassium, and protein. It's widely used for its antioxidant, anti-inflammatory, and nutritional benefits.
              </p>
              <p className="mt-3 italic">
                Used in traditional medicine for centuries and now backed by modern clinical studies.
              </p>
            </>
          )
        },
        {
          id: 2,
          question: 'What are the main health benefits of Moringa?',
          answer: (
            <>
              <p className="mb-3">Moringa may:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Improve energy, stamina, and mental clarity</li>
                <li>Balance blood sugar and cholesterol levels</li>
                <li>Support liver and kidney function</li>
                <li>Boost immunity and fight oxidative stress</li>
                <li>Promote healthy skin, hair, and nails</li>
                <li>Support hormonal and reproductive health (especially in women)</li>
              </ul>
              <p className="mt-3 text-sm italic">Sources: Healthline, NIH, NCBI, WebMD</p>
            </>
          )
        }
      ]
    },
    {
      id: 'wheatgrass',
      title: 'Wheatgrass FAQs',
      subtitle: 'For Powder & Capsules',
      faqs: [
        {
          id: 1,
          question: 'What is Wheatgrass?',
          answer: (
            <>
              <p className="mb-3">
                Wheatgrass is the freshly sprouted young grass of the wheat plant (Triticum aestivum). It's packed with chlorophyll, amino acids, minerals, enzymes, and vitamins A, C, and E, making it a powerful natural detoxifier and rejuvenator.
              </p>
              <p className="mt-3 italic">
                Often called "green blood" due to its high chlorophyll content and health-boosting potential.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'barleygrass',
      title: 'Barley Grass FAQs',
      subtitle: 'For Powder & Capsules',
      faqs: [
        {
          id: 1,
          question: 'What is Barley Grass?',
          answer: (
            <>
              <p className="mb-3">
                Barley Grass is the young, leafy growth of the barley plant (Hordeum vulgare), harvested before the grain forms. It's a <strong>nutritional powerhouse</strong>, rich in chlorophyll, vitamins A, C, K, and B-complex, minerals like calcium and iron, antioxidants, enzymes, and fiber.
              </p>
              <p className="mt-3 italic">
                Used in functional medicine and wellness routines worldwide for its powerful detoxifying and alkalizing effects.
              </p>
            </>
          )
        }
      ]
    },
    {
      id: 'alfalfa',
      title: 'Alfalfa FAQs',
      subtitle: 'For Powder & Capsules',
      faqs: [
        {
          id: 1,
          question: 'What is Alfalfa?',
          answer: (
            <>
              <p className="mb-3">
                Alfalfa (Medicago sativa) is a nutrient-rich plant often referred to as the "Father of All Foods." It's packed with essential vitamins (A, C, E, K), minerals (calcium, iron, magnesium), chlorophyll, enzymes, and plant protein.
              </p>
              <p className="mt-3 italic">
                Used for centuries in Ayurveda, Chinese medicine, and modern wellness for its detoxifying and revitalizing properties.
              </p>
            </>
          )
        }
      ]
    }
  ];

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FAQ Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl font-light opacity-90">
              Find detailed answers about our premium superfoods
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white z-40 border-b border-neutral-200 shadow-sm">
        <div className="container overflow-x-auto">
          <div className="flex space-x-4 py-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className={`space-y-6 ${
                activeCategory === category.id ? 'block' : 'hidden'
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="text-neutral-600">{category.subtitle}</p>
                )}
              </div>

              {category.faqs.map((faq, index) => (
                <motion.div
                  key={`${category.id}-${faq.id}`}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="border border-neutral-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(`${category.id}-${faq.id}`)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-neutral-900 pr-8">{faq.question}</h3>
                    {openQuestion === `${category.id}-${faq.id}` ? (
                      <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === `${category.id}-${faq.id}` && (
                    <div className="px-6 pb-6">
                      <div className="prose prose-neutral max-w-none">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 