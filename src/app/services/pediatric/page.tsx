"use client";
import { SizeProvider } from "@/contexts/sizeContext";
import Body, { PageDetails } from "@/components/layouts/services/body";

const pageDetails: PageDetails = {
  pageTitle: "Pediatric dentistry",
  heroImageSrc: "img/IMG_0075 1.jpg",
  detailFactoid:
    "Children typically start teething within their first six months. It is highly beneficial to have us examine their teeth and monitor their dental development.",
  detailInfo:
    "Children's dentistry, also known as pediatric dentistry, is a specialized field in dental science dedicated to the oral health of children, spanning from infancy through the teenage years. While it may appear early, it is crucial to schedule your child's first visit to Haimanot Trischuk Dental Clinic around their first birthday. Children typically start developing their teeth during their first six months of life. Having us examine their teeth and monitoring their dental development can be highly advantageous.\n\nThe entire compassionate team at Haimanot Trischuk Dental Clinic is committed to providing a patient experience unlike any other. The foundation of this philosophy is our personable and professional staff. We collectively strive to blend technology, art, and healthcare for each patient. Our goal is to provide you and your child with an individualized patient experience unlike any other you have had at a dental office. We aim to create a positive and comfortable atmosphere for patients of all ages while still meeting their dental needs, fulfilling their wishes, and exceeding expectations. Call us today at 306-782-1224 to schedule an appointment.\n\nYour child's health is an incredibly important aspect of parenthood. You'll naturally want to ensure their healthy growth and strength. Additionally, you'll want them to enjoy the advantages of a bright smile and minimize any potential discomfort. Considering a dental practice that specializes in pediatric care is essential for these reasons. Haimanot Trischuk Dental Clinic offers the necessary qualifications and expertise in working with children, ensuring top-quality dental care for both you and your child",
  aboutInfo: [
    {
      title:
        "regular examinations are critical in preventative children’s dentistry",
      content:
        "Similar to adults, your child should visit us for routine children's dentistry services, which include checkups and cleanings. These cleanings are most beneficial every six months. Regular children's dentistry exams help your child, you, and us prevent unnecessary cavities, tooth decay, and gum disease. Just like a dental cleaning for you, at Haimanot Trischuk Dental Clinic, we will remove damaging plaque and debris from your child's teeth. We always include an oral exam for your child to ensure their teeth are erupting properly. As your child grows older, we will also monitor their adult teeth to ensure they are coming in correctly.",
    },
    {
      title: "simple tips to help avoid tooth decay",
      content:
        "As a parent, you can take early preventative measures to protect your child against tooth decay, even before their first dental visit:\nMake an effort to rinse your baby's teeth with water or gently wipe them down with a damp cloth after feeding, especially before they fall asleep. Any residue from milk or formula can promote decay. Untreated cavities can cause discomfort and potentially lead to a harmful infection.\nAim to wean your child off breastfeeding or bottle-feeding by their first birthday. This effort helps prevent decay and reduces the risk of jaw growth problems resulting from excessive sucking.\nEstablish good habits from the start. Begin brushing their teeth as soon as the first tooth appears. Even the tiniest tooth can develop a cavity. Use a soft-bristled brush and water, and consult us about when to introduce a small amount of toothpaste.\nWhen your child is old enough to start brushing on their own, continue to supervise their brushing and assist them in cleaning any areas they might have missed.\nAvoid giving sugary drinks or milk before bedtime as part of proper dental care.\nLimit the consumption of sugary foods and drinks in your child's diet.",
    },
  ],
  aboutPeople: [{ name: "Megan N", jobTitle: "Dental Assistant", imageSrc: "img/Rectangle 115 (3).png" }, { name: "Tori S", jobTitle: "Registered Dental Hygeienist", imageSrc: "img/Rectangle 113 (5).png" },],
  whyHeading: "Why is Haimanot Trischuk dental clinic your perfect pediatric dentist?",
  whyInfo: "An essential aspect of pediatric dentistry is finding the best dentist for both you and your child. It's crucial to ensure that you select a dental team qualified to provide proper pediatric dentistry consistently. Additionally, it's beneficial to choose a pediatric dentist who is skilled in working with children and is friendly. The entire team at Haimanot Trischuk Dental clinic embodies these qualities. We understand that dental appointments can be challenging for children, which is why our team is dedicated to ensuring their comfort throughout every visit\n\nIf you'd like to meet our family-friendly staff at  Haimanot Trischuk Dental clinic , we recommend scheduling an appointment for yourself before your child's visit. This will provide you with a firsthand experience of how we operate, our mindfulness, the quality of our services, and our overall demeanor. This experience will help define your comfort zone when scheduling an appointment for your child. Furthermore, scheduling your child's checkup and cleaning allows us to establish a historical growth path. We are dedicated to providing high-quality dental services for your child, all delivered with a friendly smile.\n\nOne of the additional benefits of choosing Haimanot Trischuk Dental Clinic is that your child can maintain the same dental team as they transition from childhood to their teenage and adult years. They can continue to visit us, a team they know and trust.",
};

export default function Page() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <Body pageDetails={pageDetails} />
      </SizeProvider>
    </main>
  );
}
