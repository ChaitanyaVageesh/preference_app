-- Insert shoe data (10 pairs = 20 shoes)
INSERT INTO shoes (name, price, features, image_url, pair_id) VALUES
-- Pair 1: Running Shoes
-- Database Schema: shoes (name TEXT, price REAL, features TEXT[], image_url TEXT, pair_id INTEGER)


-- Pair 1: PriceRange & BrandSensitivity (Ultra-Premium Luxury vs. Budget Utilitarian)
('Bata Power Running Shoe', 30.00, ARRAY['ValueForMoney','Basic mesh upper', 'Lightweight EVA outsole', 'Value-focused cushioning', 'Everyday utility'], 'public/images/11.avif', 1),
('Gucci Rhyton Sneaker', 950.00, ARRAY['Luxury','Ivory leather construction', 'Bulky silhouette', 'Debossed Gucci logo', 'Made in Italy', 'High-status branding'], 'public/images/12.avif', 1),

-- Pair 2: SocialInfluenceTrend & Context (Limited "Hype" Sneaker vs. Classic Formal Shoe)
('Nike x Off-White Air Jordan 1', 2500.00, ARRAY['Most Bought', 'Deconstructed design', 'Signature zip-tie tag', '"AIR" branding on midsole', 'Limited edition resale market', 'High social validation'], 'public/images/21.jpeg', 2),
('Clarks Desert Boot', 150.00, ARRAY['Classic Formal','Genuine suede or leather upper', 'Natural crepe sole', 'Timeless 2-eyelet design', 'Versatile formal/casual wear', 'Heritage brand trust'], 'public/images/22.webp', 2),

-- Pair 3: Comfort & Functional Fit (Max-Cushion Orthopedic vs. Minimalist Fashion)
('Vans Classic Slip-On', 60.00, ARRAY['Low profile canvas upper', 'Elastic side accents', 'Minimalist aesthetic', 'Signature rubber waffle outsole'], 'public/images/31.jpeg', 3),
('Hoka Clifton 9', 145.00, ARRAY['Maximum cushion EVA foam midsole', 'Early stage Meta-Rocker for smooth ride', 'Breathable engineered knit upper', 'APMA Seal of Acceptance for foot health'], 'public/images/32.jpeg', 3),

-- Pair 4: QualityDurability & Purpose (Rugged Outdoor Boot vs. Delicate Fashion Heel)
('Jimmy Choo Romy 100 Pump', 750.00, ARRAY['Patent leather', 'Pointy toe stiletto design', '100mm heel height', 'Leather lining and sole', 'Event-specific delicate construction'], 'public/images/41.jpeg', 4),
('Timberland 6-Inch Premium Boot', 198.00, ARRAY['Premium waterproof leather', 'Seam-sealed construction for durability', 'PrimaLoft insulation', 'Anti-fatigue technology for comfort'], 'public/images/42.jpg', 4),

-- Pair 5: Brand Trust & Sensitivity (Global Iconic Brand vs. Generic Private Label)
('Amazon Essentials Classic Sneaker', 25.00, ARRAY['Generic Private Label','Faux leather upper', 'Minimalist design', 'Basic rubber sole', 'Private label value pricing', 'Low brand recognition'], 'public/images/51.jpg', 5),
('Adidas Superstar', 90.00, ARRAY['Be a part of global brand','Iconic rubber shell toe', 'Full-grain leather upper', 'Global brand recognition', 'Decades of cultural heritage', '3-Stripes branding'], 'public/images/52.jpeg', 5),

-- Pair 6: Celebrity Endorsement & Social Validation (Celebrity Collab vs. Pure Performance)
('Decathlon Kalenji KS900', 90.00, ARRAY['K-Ring heel cushioning technology', 'Arkstab stability system', 'Focus on performance metrics', 'No celebrity endorsement', 'Function-over-form design'], 'public/images/61.jpg', 6),
('Adidas Yeezy Boost 350 V2', 230.00, ARRAY['Kardarshian - West (Ye) collaboration', 'BOOST midsole cushioning', 'Primeknit upper', 'High resale value and hype', 'Strong fan-following'], 'public/images/62.webp', 6),

-- Pair 7: Design & Aesthetic Alignment (Aggressive Trend vs. Timeless Classic)
('Allen Edmonds Park Avenue Oxford', 425.00, ARRAY['Premium calfskin leather', 'Classic cap-toe Oxford design', '360° Goodyear welt construction', 'Timeless formal style', 'Made in USA'], 'public/images/71.jpg', 7),
('Balenciaga Triple S Sneaker', 1100.00, ARRAY['Complex 3-layered outsole','Aggressive trend', 'Oversized "dad shoe" silhouette', 'Embroidered size at toe', 'Trend-driven high-fashion design', 'Mixed materials'], 'public/images/72.png', 7),

-- Pair 8: Social Influence (Mass Peer Popularity vs. Niche Enthusiast Choice)
('Viberg Service Boot', 760.00, ARRAY['Horween Chromexcel leather', 'Stitchdown construction', 'Small-batch production', 'Niche enthusiast community', 'Cult following'], 'public/images/81.webp', 8),
('Skechers D''Lites', 75.00, ARRAY['Air-Cooled Memory Foam insole', 'Chunky retro design', 'Widespread retail availability', 'High volume of peer reviews', 'Mass-market popularity'], 'public/images/82.webp', 8),

-- Pair 9: Economic Constraints & Novelty (Mass Market On-Sale vs. Exclusive & Rarely Discounted)
('Nike Revolution 7 (Sale Price)', 49.99, ARRAY['Soft foam midsole for cushioning', 'Made with recycled materials', 'Entry-level running shoe', 'Frequently available on discount'], 'public/images/91.jpeg', 9),
('Common Projects Achilles Low', 450.00, ARRAY['Minimalist luxury design', 'Signature gold foil serial number', 'Premium Italian leather', 'Rarely discounted, holds value', 'Psychological motivator of exclusivity'], 'public/images/92.jpeg', 9),

-- Pair 10: Sustainability & Brand CSR (Eco-Conscious Brand vs. Conventional Fast Fashion)
('Zara Contrast Sole Sneaker', 70.00, ARRAY['Polyurethane/Polyester upper', 'Standard vulcanized rubber sole', 'Trend-driven fast-fashion cycle', 'Conventional materials and production'], 'public/images/101.jpg', 10),
('Allbirds Wool Runners', 110.00, ARRAY['ZQ Merino Wool upper (ethical)', 'SweetFoam midsole from sugarcane', 'Carbon neutral company', 'Focus on sustainability and CSR', 'Machine washable'], 'public/images/102.jpeg', 10);

-- Database Schema: shoes (name TEXT, price REAL, features TEXT[], image_url TEXT, pair_id INTEGER)

-- Pair 1: Functional Fit (Max Comfort) vs. Aesthetic Alignment (High Style)
('Hoka Clifton 9', 145.00, ARRAY['Maximum cushion EVA foam midsole', 'Early stage Meta-Rocker for smooth ride', 'Breathable engineered knit upper', 'APMA Seal of Acceptance for foot health'], 'public/images/111.webp', 1),
('Axel Arigato Clean 90', 290.00, ARRAY['Handcrafted leather upper', 'Minimalist high-fashion design', 'Cushioned footbed', 'Subtle gold-stamped logo', 'Made in Portugal'], 'public/images/112.webp', 1),

-- Pair 2: Brand Trust vs. Economic Constraints (Iconic Brand vs. Identical Replica)
('Nike Air Force 1 ''07', 115.00, ARRAY['Genuine leather upper', 'Nike Air cushioning unit', 'Iconic and trusted silhouette', 'High brand recognition and cultural value'], 'public/images/121.avif', 2),
('Unbranded AF1 Replica', 35.00, ARRAY['Faux-leather upper', 'Basic rubber sole construction', 'Identical aesthetic to original', 'Prioritizes cost over brand authenticity'], 'public/images/122.jpeg', 2),

-- Pair 3: Social Validation (Overt "Hype") vs. Psychological Motivators (Stealth Luxury)
('Travis Scott x Air Jordan 1 Low', 1500.00, ARRAY['Limited celebrity collaboration', 'Reverse Swoosh logo for high visibility', 'High resale market value', 'Overt signal of trend-awareness'], 'public/images/131.webp', 3),
('Common Projects Achilles Low', 450.00, ARRAY['Premium Italian leather', 'Signature gold foil serial number', 'Minimalist, unbranded design', 'Recognized by niche fashion insiders', 'Understated "stealth wealth" signal'], 'public/images/132.webp', 3),

-- Pair 4: Aesthetic Alignment (Fleeting Trend vs. Timeless Classic)
('Balenciaga Triple S Sneaker', 1150.00, ARRAY['Complex 3-layered outsole', 'Aggressive, oversized "dad shoe" silhouette', 'High-fashion, trend-driven design', 'Embroidered branding and size'], 'public/images/141.png', 4),
('Allen Edmonds Park Avenue Oxford', 425.00, ARRAY['Premium calfskin leather', 'Classic cap-toe formal design', '360° Goodyear welt for longevity', 'Timeless, multi-generational style'], 'public/images/142.jpg', 4),

-- Pair 5: Functional Fit (Durability) vs. Economic Constraints (Disposability)
('Red Wing Iron Ranger Boot', 350.00, ARRAY['Premium full-grain leather', 'Goodyear welt construction for resoleability', 'Triple-stitched for maximum durability', 'High initial cost for long-term value'], 'public/images/151.jpg', 5),
('Fast-Fashion Faux-Leather Boot', 80.00, ARRAY['Polyurethane upper', 'Cemented sole for lower cost', 'Trendy design for a single season', 'Low initial cost, designed for disposability'], 'public/images/152.jpeg', 5),

-- Pair 6: Psychological Motivators (Identity/CSR) vs. Brand Trust (Conventional Classic)
('Allbirds Wool Runner', 110.00, ARRAY['ZQ Merino Wool (sustainability story)', 'SweetFoam midsole from sugarcane', 'Carbon neutral brand identity', 'Appeal based on ethical values and CSR'], 'public/images/161.jpg', 6),
('Adidas Stan Smith', 100.00, ARRAY['Full-grain leather upper (now with recycled options)', 'Iconic, globally recognized design', 'Decades of cultural trust and reliability', 'Appeal based on heritage and proven style'], 'public/images/162.jpeg', 6),

-- Pair 7: Functional Fit (Modern Comfort) vs. Contextual Pressure (Formal Tradition)
('Cole Haan ØriginalGrand Wingtip Oxford', 160.00, ARRAY['Grand.ØS energy foam for sneaker-like comfort', 'Lightweight hybrid construction', 'Breaks convention for user comfort', 'Modern solution to a traditional need'], 'public/images/171.jpeg', 7),
('Johnston & Murphy Melton Cap Toe', 185.00, ARRAY['Hand-polished calfskin leather', 'Traditional Goodyear welt construction', 'Adheres to formal dress code expectations', 'Prioritizes tradition and appropriateness'], 'public/images/172.jpeg', 7),

-- Pair 8: Social Validation (Mass Conformity) vs. Aesthetic Alignment (Niche Individuality)
('Birkenstock Arizona Suede', 110.00, ARRAY['Contoured cork-latex footbed', 'Instantly recognizable silhouette', 'High volume of peer reviews and popularity', 'Signals conformity with a widespread trend'], 'public/images/181.jpeg', 8),
('Suicoke KAW-VS Sandal', 240.00, ARRAY['Vibram footbed and outsole', 'Nylon straps with velcro closure', 'Cult-favorite, architectural design', 'Signals individuality and niche taste'], 'public/images/182.jpeg', 8);
