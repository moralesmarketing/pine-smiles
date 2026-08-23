export const business = {
  name: "Pine Smiles Orthodontics & Pediatric Dentistry",
  shortName: "Pine Smiles",
  phone: "(909) 393-4800",
  phoneHref: "tel:19093934800",
  address: {
    line1: "5811 Pine Ave, Suite B",
    line2: "Chino Hills, CA 91709",
    full: "5811 Pine Ave, Suite B, Chino Hills, CA 91709",
  },
  mapsQuery:
    "Pine Smiles Orthodontics and Pediatric Dentistry 5811 Pine Ave Suite B Chino Hills CA 91709",
  virtualTourEmbedUrl:
    "https://www.google.com/maps?layer=c&cbll=33.9470111,-117.6781502&cbp=12,354.86,,0,84.12&panoid=CIHM0ogKEICAgICEtKuJGw&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pine+Smiles+Orthodontics+and+Pediatric+Dentistry+5811+Pine+Ave+Suite+B+Chino+Hills+CA+91709",
  serviceAreas: [
    "Chino Hills",
    "Chino",
    "Eastvale",
    "Norco",
    "Ontario",
    "Diamond Bar",
    "Walnut",
    "Pomona",
    "Upland",
    "Corona",
    "Mira Loma",
    "Anaheim Hills",
    "Yorba Linda",
  ],
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    yelp: "#",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  {
    label: "Meet Our Team",
    href: "/our-team",
    children: [
      { label: "Dr. Avani Gandhi", href: "/avani" },
      { label: "Dr. Jin Kim", href: "/jin" },
      { label: "What Sets Us Apart", href: "/what-sets-us-apart" },
      { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    label: "Pediatric Dentistry",
    href: "/first-visit-kids",
    children: [
      { label: "First Visit", href: "/first-visit-kids" },
      { label: "Age 1 Visit", href: "/kids-age-1" },
      { label: "Hygiene Appointment Guidelines", href: "/hygiene-appointment-guidelines" },
      { label: "Dental Filling Appointment Guidelines", href: "/dental-appointment-guidelines" },
      { label: "Pediatric FAQ", href: "/faq-pediatric-dental" },
    ],
  },
  {
    label: "Orthodontics",
    href: "/treatment",
    children: [
      { label: "Treatment", href: "/treatment" },
      { label: "Braces", href: "/braces" },
      { label: "Invisalign", href: "/invisalign" },
      { label: "Before & After", href: "/before-after" },
      { label: "Emergency Information", href: "/emergency-ortho" },
    ],
  },
  {
    label: "New Patients",
    href: "/new-patient-info",
    children: [{ label: "New Patient Info", href: "/new-patient-info" }],
  },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  {
    label: "Contact",
    href: "/our-office",
    children: [
      { label: "Our Office", href: "/our-office" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
      { label: "Refer a Patient", href: "/refer-a-patient" },
      { label: "Post Appointment Survey", href: "/post-appointment-survey" },
    ],
  },
];

export const doctors = {
  gandhi: {
    name: "Dr. Avani Gandhi",
    role: "Pediatric Dentist",
    slug: "avani",
    bio: [
      "Fun-loving, easy-going and a dedicated pediatric dentist. These words describe Dr. Avani Gandhi, who wanted to find a career that would allow her to both teach and mentor children, while also fulfill her love for the health and professional field. She is committed to creating a positive environment for all those who enter her office by taking her time, effort and energy to make everyone feel welcome. She truly feels privileged to interact and connect with children everyday. Through their eyes, we learn to appreciate the little things, which makes focusing on prevention and comfortable care a priority for Dr. Gandhi. Her goal is to provide parents and patients with dental education and easy access to dental care, specifically by the age of one, so families will be more aware of the importance of disease prevention. She will treat her patients in the office the same way she would treat her own children; with care, respect, compassion and most importantly; nothing unnecessary.",
      "She graduated from the University of California, Los Angeles for her undergraduate training with a degree in Economics. After she completed her dental training at the University of California, San Francisco, Dr. Gandhi went on to complete her specialty training in Pediatric Dentistry at Montefiore Medical Center/Albert Einstein College of Medicine where she received extensive training in all aspects of pediatric dental care. She is a Diplomate of the American Board of Pediatric Dentistry and a member of the American Academy of Pediatric Dentistry. Dr. Gandhi also has been practicing in private practices for over 5 years, providing excellent care to all children.",
      "A native to southern California and a resident of Chino Hills, Dr. Gandhi and her husband are excited to settle back home with their two precious children. She enjoys spending time with family and friends, trying new foods, traveling and exploring everything that beautiful California has to offer!",
    ],
  },
  kim: {
    name: "Dr. Jin Y. Kim",
    role: "Orthodontist, DDS, MS",
    slug: "jin",
    bio: [
      "As a dedicated husband and father of two, Jin Y. Kim DDS, MS, understands the importance of finding the best healthcare providers for his family. With that in mind, he built Pine Smiles around values, ethics, integrity, and a commitment to the well-being of each of his patients.",
      "He is committed to practicing quality orthodontic treatment and offering honest, optimal care for your family. His caring personality allows the most efficient and comfortable treatment plan individualized for each patient. Dr. Kim's priority is not only providing proper diagnosis and a conservative treatment plan, but also getting to know each patient on a personal level. Dr. Kim loves knowing the difference he can make in a person's life by improving the look and function of their smile. He considers the increase in self-esteem and confidence in his patients to be a true success.",
      "Dr. Kim attended University of California, Los Angeles (UCLA) where he earned his Bachelor of Science degree in Biology and a Minor degree in Musicology with high honors. He then obtained his Doctor of Dental Surgery degree at University of California, San Francisco (UCSF), School of Dentistry. Along with academic accolades he was actively involved in community service and leadership activities. He also conducted craniofacial development research with several internationally recognized researchers. He was awarded numerous prestigious honors for his contribution and accomplishments while attending dental school.",
      "Dr. Kim continued his pursuit of excellence in specialty training for orthodontics at Columbia University, College of Dental Medicine, in New York City. While in residency training, he completed his Master of Science degree and was able to publish his findings in a peer-reviewed journal. Dr. Kim was also invited to be a co-author of a chapter in a well known orthodontic textbook. His knowledge of the latest techniques and dedication to dentistry represent the very best in orthodontic service.",
      "Dr. Kim and his family reside in Chino Hills, and he is looking forward to creating lots of beautiful smiles in his community. When he is not in the office, he enjoys spending time with his beautiful wife and his two young children. What brings a smile to Dr. Kim's face? Family, friends, traveling, UCLA football and basketball, international soccer, newspaper and a cup of good coffee!",
    ],
  },
};

export const whatSetsUsApart = [
  {
    title: "Conservative and Efficient Treatment Plan",
    body: "Dr. Kim and Dr. Gandhi's main goal is to recommend the most conservative treatment plan and to deliver the most comfortable treatment to all their patients. At Pine Smiles, prevention and education are the main priority. Dr. Kim will see his patients every month to make sure that the treatment is completed on time, and Dr. Gandhi will emphasize the necessary recall visits to ensure each child is seen on a regular basis.",
  },
  {
    title: "Technology",
    body: "At Pine Smiles, we use the latest technology available. We care about patient's safety and comfort, and want to provide them with the best diagnostic tools that can help us achieve successful outcomes.",
  },
  {
    title: "Atmosphere",
    body: "Our office offers a warm, inviting, family-friendly atmosphere where we strive to provide you with a comfortable, convenient, and an all around great experience for our patients and patients' families.",
  },
  {
    title: "Convenience",
    body: "At Pine Smiles, we are a combined orthodontic/pediatric dental office, so you will have peace of mind knowing that your orthodontic concerns can be met while your child's dental needs are being closely monitored. Your family will get to know both doctors, which will make the transition, if needed, for your child easy and comfortable. Having two specialists in one office will minimize the number of appointments needed for your child since simultaneous treatment can be provided.",
  },
  {
    title: "Customization",
    body: "Dr. Kim customizes each smile for each patient in order to create a long lasting and healthy smile. No two patients are the same, nor should their treatment be! At Pine Smiles, we work hand-in-hand with our patients and their families to design unique treatment plans focused on individual needs. One patient at a time. Custom care.",
  },
  {
    title: "Caring",
    body: "From the moment you and your family enter our office to the moment you leave, you can expect to receive exceptional treatment with unconditional care, kindness and respect.",
  },
  {
    title: "Retention",
    body: "Dr. Kim and Dr. Gandhi believe in developing a long-lasting relationship with each patient. Therefore, Dr. Kim puts a strong emphasis on the retention phase. After braces treatment is completed, Dr. Kim will follow up with the patient for up to a year at no charge. Happy smile = happy doctor!",
  },
  {
    title: "Affordability and Financial Flexibility",
    body: "We understand that orthodontic treatment is a big investment for the future. We will make every effort to provide a treatment plan which fits your timetable and budget.",
  },
  {
    title: "Accommodating Scheduling",
    body: "We understand your time is valuable. Pine Smiles offers flexible scheduling including evening and weekend appointments.",
  },
];

export const reviews = [
  {
    quote:
      "Exceptional in every way. My children are between the ages of 5 and 1 and each child had positive experiences. Dr. Ghandi takes the time to educate parents and is so sweet to my children.",
    author: "Jill R.",
    location: "Provo, UT",
    source: "Yelp",
  },
  {
    quote:
      "First dental visit for our little one year old. Dr. G and her assistant were wonderful. Appreciate the singing and kindness towards my little fighter. We will be back in 6 months!",
    author: "Cindy H.",
    location: "Ontario, CA",
    source: "Yelp",
  },
  {
    quote:
      "We had a great experience at Pine Smiles with my 2 year old daughter. After taking her to three different dentists who could not get her to even open her mouth for an exam, the staff and dentist took their time with her, showed her how everything worked, and got her to open her mouth for an exam and cleaning!",
    author: "Mary Reichert",
    location: "",
    source: "Google Reviews",
  },
  {
    quote:
      "I'm so glad I found Pine Smiles and Dr Gandhi! After visiting 3 other pediatric dentists in Chino Hills we found THE ONE! Dr. Gandhi is so great with my three year old- she makes checkups fun by singing the ABCs, engaging with my daughter, and explaining everything that's happening to her.",
    author: "June Makhani",
    location: "",
    source: "Google Reviews",
  },
];

export const pediatricFaq = [
  {
    q: "What is a pediatric dentist?",
    a: "Pediatric dentists are the pediatricians of dentistry. Pediatric dentistry is the specialty of dentistry that focuses on the oral health of young people. After completing a four-year dental school curriculum, two additional years of rigorous training are required to become a pediatric dentist. This prepares us to meet the needs of infants, children and adolescents, including persons with special health care needs.",
  },
  {
    q: "How can I help my child enjoy good dental health?",
    a: "Thoroughly clean your infant's gums after each feeding with a water-soaked infant cloth to stimulate gum tissue and remove food. Practice good oral hygiene: brush at least twice a day and floss once a day. Build healthy eating habits: avoid frequent snacking, sticky foods, and limit sugary drinks. Visit the dentist every six months starting no later than age one, and have protective sealants applied when appropriate.",
  },
  {
    q: "What to do for immediate emergency care?",
    a: "First, assess whether your child's injury involved hitting the head causing them to lose consciousness even for a brief moment, or if there are any medical concerns. If this is the case, call your pediatrician first or go to a hospital emergency room. Worry about the teeth later.",
  },
  {
    q: "When is a tooth falling out not an emergency?",
    a: "When the tooth is exfoliating (being pushed out by the permanent tooth), teeth naturally fall out as their roots are resorbed by an erupting permanent tooth. This can cause the baby tooth to change color and get extremely loose. Though not an emergency, if your child is uncomfortable with a loose tooth, you can make an appointment and bring them in to be checked.",
  },
  {
    q: "What if my child has a toothache?",
    a: "Clean the area around the sore tooth thoroughly by rinsing your child's mouth with water and flossing and brushing away any trapped food. Under no circumstances should you use aspirin on the aching tooth or gum. In the event of facial swelling, apply a cold compress and call your dentist immediately. For temporary pain relief, give your child an over-the-counter pain reliever approved by your pediatrician, and call our office for an appointment with Dr. Gandhi as soon as possible.",
  },
  {
    q: "What if my child cuts or bites tongue, lip or cheek?",
    a: "Ice can be applied to any bruised areas. For bleeding, apply firm (but gentle) pressure with sterile gauze or a clean cloth. If the bleeding does not stop with pressure or continues after 15 minutes, go to an emergency room.",
  },
  {
    q: "What if a tooth is chipped or fractured?",
    a: "Contact your dentist immediately to determine if the fracture requires immediate attention. Rinse your child's mouth with room temperature water and apply cold compresses to reduce swelling. If you can find the broken tooth fragment, bring it with you to the dentist — it can often be bonded back onto the tooth. Even without the broken piece, a dentist can restore the tooth to its natural appearance with bonding.",
  },
  {
    q: "What to do about a discolored tooth?",
    a: "Tooth darkening or discoloration after a trauma is similar to a bruise on the skin. Call our office for an appointment to make sure there is no infection.",
  },
  {
    q: "What should I do if my child's baby tooth is knocked out?",
    a: "Contact your dentist as soon as possible. We do not re-implant baby teeth, but it is important to examine your child to be sure no fragments of tooth are embedded in the gums, lip or tongue, and to determine the extent of trauma to other teeth in the area. Bring along the knocked-out tooth.",
  },
  {
    q: "What should I do if my child's permanent tooth is knocked out?",
    a: "Find the tooth! Recover it and hold it by the crown (top), not the root end. Rinse gently using only cool water — do NOT scrub it or use soap, just water. If possible, replace the tooth back in the socket and hold it in place with clean gauze. If you can't put it back, place the tooth in a clean container with milk. Call Dr. Gandhi immediately — time is essential. Knocked-out teeth will almost always require a root canal, but can often survive for years if treated promptly. The faster you act, the better your chances of saving the tooth.",
  },
  {
    q: "What if my child has a possible broken jaw?",
    a: "In the event of jaw injury, go immediately to an emergency room.",
  },
  {
    q: "What if my child is bleeding after a baby tooth falls out?",
    a: "Fold a piece of gauze and place it tightly over the bleeding area. Have your child bite down on the gauze for 15 minutes; if bleeding continues, call us for an appointment.",
  },
  {
    q: "What if my child has a cold or canker sores?",
    a: "Over-the-counter medications will usually provide temporary relief. If sores persist, call us for an appointment.",
  },
  {
    q: "Can dental injuries be prevented?",
    a: "Yes. Reduce oral injury in sports by having your child wear a helmet and/or mouth guard when warranted. Always use a car seat for young children and require seat belts for everyone else. Childproof your home to prevent falls, electrical injuries, and choking on small objects. Protect your child from unnecessary toothaches with regular dental visits and preventive care.",
  },
];

export const orthoTreatmentSections = [
  {
    title: "Complimentary Initial Consultation",
    body: "Dr. Kim and his team members are always excited about meeting new patients. Your initial appointment will consist of a thorough clinical examination, panoramic x-ray, and a discussion of potential treatment options. During this appointment, we will address any questions that you may have regarding orthodontic treatment. The Pine Smiles team would love to show you how we can help you achieve optimal dental health and the smile of your dreams. Please contact our office to schedule an appointment.",
  },
  {
    title: "Early Prevention Treatment (Phase I Treatment)",
    body: "By age 7, most children have a mix of adult and baby teeth. Orthodontists can spot subtle problems with jaw growth and emerging teeth while some baby teeth are still present — some orthodontic problems are easier to correct if found early. Early evaluation can prevent more serious problems from developing later and often simplifies later treatment and/or prevents surgery or tooth extractions. For these reasons, the American Association of Orthodontists and Dr. Kim emphasize seeking an orthodontic evaluation by age 7. Even if a problem is detected, Dr. Kim may take a \"wait-and-see\" approach, checking on your child as the permanent teeth come in and the jaws and face continue to grow. Typically, early treatment involves the use of orthodontic appliances to guide the growth of your child's bones and create a better foundation for adult teeth as they emerge.",
  },
  {
    title: "Adolescent Treatment",
    body: "The majority of orthodontic patients are adolescents with treatment initiated after the primary teeth have been lost and the permanent teeth have erupted — there's still potential for growth that helps with some bite corrections. Correcting misalignments, improving function, and creating great smiles improves teenagers' self esteem and confidence. At Pine Smiles, Dr. Kim offers a full range of treatments specifically designed for each teenager, from traditional braces to \"invisible\" braces to Invisalign Teen.",
  },
  {
    title: "Adult Treatment",
    body: "There is no age limit for orthodontic treatment — it is never too late to achieve the smile you have always dreamed of. With healthy gums and bone structure, teeth can be straightened at any age. Seeking orthodontic treatment as an adult can help avoid severe tooth decay, gum and bone loss, irregular wear of the tooth enamel, and TMJ/TMD pain. At Pine Smiles, Dr. Kim and his team offer a wide selection of treatments to meet the individual needs and desires of each adult patient, from traditional metal braces and ceramic clear braces to Invisalign.",
  },
  {
    title: "Invisalign and Invisalign Teen",
    body: "For patients who want the benefits of beautiful straight teeth without going through braces, Invisalign is a series of custom-made, clear aligners suited to adults and teens with minor orthodontic problems. The Invisalign aligners gradually move teeth into proper alignment, making the process nearly invisible. A proper assessment will identify whether Invisalign is an ideal method for you.",
  },
];
