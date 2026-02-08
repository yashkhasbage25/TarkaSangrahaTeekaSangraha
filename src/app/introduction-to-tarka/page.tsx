'use client';
import { Nanum_Myeongjo } from "next/font/google";
import { Box, Typography, Divider, Chip } from "@mui/material";

const nanumMyeongjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

export default function IntroductionToTarkaShastra() {
  const divider = <Divider style={{ borderColor: 'white', width: '90%', margin: '32px 0' }} />;
  
  return (
    <div className={`flex flex-col text-white items-center justify-center min-h-screen p-8 gap-y-2 max-w-3xl mx-auto ${nanumMyeongjo.className}`}>
        <>
          <Typography variant="h4" className="mb-4 font-bold" gutterBottom>
            Nyāya, Vaiśeṣika, Tarka, and the Tarkasaṅgraha:<br className="md:hidden" /> Foundations, History, Relations, and Legacy
          </Typography>

          <Box className="flex flex-wrap gap-2 justify-center my-4">
            <Chip label="#Nyāya" color="primary" />
            <Chip label="#Vaiśeṣika" color="secondary" />
            <Chip label="#Tarka" color="info" />
            <Chip label="#Darśana" color="success" />
            <Chip label="#IndianPhilosophy" color="warning" />
          </Box>

          {/* 1. What is Nyāya? */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            What is Nyāya?
          </Typography>

          <Typography className="my-2 text-lg">
            Nyāya is a classical Indian philosophical system that analyzes logic, reasoning, and the means by which humans attain trustworthy knowledge about the world. It is built around a rigorous examination of how we form beliefs, test them, and distinguish truth from error. The Nyāya approach is foundational to rational dialogue and debate in Indian thought, centering on four means of valid knowledge: perception, inference, comparison, and testimony.
          </Typography>
          <Typography className="my-2">
            For beginners, Nyāya offers a clear and practical set of rules for critical thinking and argument. For advanced students, it serves as an analytical framework dealing with challenging concepts in epistemology, metaphysics, and debate.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Pramāṇa" size="small" color="primary" />
            <Chip label="#Epistemology" size="small" color="secondary" />
            <Chip label="#Logic" size="small" color="info" />
          </Box>

          {/* 2. Nyāya's Place Among the Darśanas */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            Nyāya's Place Among the Six Darśanas
          </Typography>

          <Typography className="my-2">
            Indian philosophical inquiry is traditionally categorized into six principal schools, known as darśanas:
            <ul className="list-disc pl-8">
              <li>Nyāya</li>
              <li>Vaiśeṣika</li>
              <li>Sāṅkhya</li>
              <li>Yoga</li>
              <li>Mīmāṃsā</li>
              <li>Vedānta</li>
            </ul>
          </Typography>
          <Typography className="my-2">
            Nyāya distinguishes itself as the branch most dedicated to the methodology of knowledge and rational argument. It provides foundational tools and patterns of reasoning that underpin philosophical discourse throughout all Indian traditions.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Ṣaḍdarśana" size="small" color="primary" />
            <Chip label="#Sāṅkhya" size="small" color="secondary" />
            <Chip label="#Yoga" size="small" color="info" />
            <Chip label="#Mīmāṃsā" size="small" color="success" />
            <Chip label="#Vedānta" size="small" color="warning" />
          </Box>

          {/* 2b. History: Prācīna and Navya Nyāya */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            The History of Nyāya: Prācīna and Navya Nyāya
          </Typography>

          <Typography variant="h6" className="font-semibold mt-4 mb-2">
            Ancient Nyāya (Prācīna)
          </Typography>
          <Typography className="my-2">
            The early development of Nyāya is found in the doctrines set out by its foundational teachers, focusing on means of knowledge, logical categories, and the structure of debate. Ancient Nyāya was engaged in philosophical discussions and debates with rival traditions, establishing itself as the primary school for systematic reasoning in India.
          </Typography>

          <Typography variant="h6" className="font-semibold mt-4 mb-2">
            New Nyāya (Navya)
          </Typography>
          <Typography className="my-2">
            From the medieval era onward, New Nyāya emerged in eastern India, distinguished by its technical language and precise logical distinctions. This school built on the previous foundation but was notable for its growth in analytical sophistication, influencing various disciplines including linguistics, law, and theology.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#PrācīnaNyāya" size="small" color="primary" />
            <Chip label="#NavyaNyāya" size="small" color="secondary" />
            <Chip label="#History" size="small" color="info" />
          </Box>

          {/* 3. Nyāya and Vaiśeṣika */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            Relationship between Nyāya and Vaiśeṣika
          </Typography>

          <Typography className="my-2">
            Nyāya and Vaiśeṣika developed independently at first—one focusing on logic and the other on the categories of reality. Their later integration produced a unified approach to Indian philosophy, combining rigorous logical methodology with a detailed ontology. This synthesis allows a comprehensive understanding of both how we know and what exists.
          </Typography>
          <Typography className="my-2">
            In contemporary study, they are often taught together, their dialog and debates over centuries having forged a robust combined tradition.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Nyāya" size="small" color="primary" />
            <Chip label="#Vaiśeṣika" size="small" color="secondary" />
            <Chip label="#Ontology" size="small" color="info" />
            <Chip label="#Padārtha" size="small" color="success" />
          </Box>

          {/* 4. Tarka as Compared to Nyāya and Vaiśeṣika */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            What is Tarka as Compared to Nyāya and Vaiśeṣika?
          </Typography>

          <Typography className="my-2">
            Tarka refers to reasoning and debate, a practice found throughout the Nyāya system but also sometimes regarded on its own. It emphasizes hypothetical argumentation and critical inquiry, serving as a dynamic process of examining and refining beliefs before arriving at certainty.
          </Typography>
          <Typography className="my-2">
            While Nyāya is the established doctrine of logic and Vaiśeṣika the systematic account of being, tarka is the active process that stimulates questioning and deeper investigation.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Tarka" size="small" color="primary" />
            <Chip label="#Reasoning" size="small" color="secondary" />
            <Chip label="#Vāda" size="small" color="info" />
          </Box>

          {/* 5. What is Tarkasaṅgraha? */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            What is Tarkasaṅgraha?
          </Typography>

          <Typography className="my-2">
            Tarkasaṅgraha, literally "Compendium of Logic," is a landmark introductory treatise of the Nyāya-Vaiśeṣika system. Composed by Annambhaṭṭa in the 17th century, it provides concise explanations of major topics including the main categories of reality, means of knowledge, and logical reasoning. It is widely used as an entry point for both novices and serious students due to its clarity and systematic approach.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Tarkasaṅgraha" size="small" color="primary" />
            <Chip label="#Annambhaṭṭa" size="small" color="secondary" />
            <Chip label="#Prakaraṇa" size="small" color="info" />
          </Box>

          {/* 5b. Tarkasaṅgraha's Relation to Prācīna and Navya Nyāya */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            Tarkasaṅgraha in the History of Nyāya
          </Typography>

          <Typography className="my-2">
            Tarkasaṅgraha serves as a bridge between ancient (Prācīna) and new (Navya) Nyāya. While its basics are rooted in the earlier tradition, it was produced at a time when New Nyāya was flourishing. As such, it provides a foundation in classical logic and ontology while easing the reader into the more technical and analytical New Nyāya. Its commentaries sometimes clarify subtle distinctions in the Navya style, but the main text remains accessible to a broad audience.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Prācīna" size="small" color="primary" />
            <Chip label="#Navya" size="small" color="secondary" />
            <Chip label="#Paramparā" size="small" color="info" />
          </Box>

          {/* 6. Popular Ṭīkās (Commentaries) */}
          {divider}
          <Typography variant="h5" className="mb-4 font-bold" gutterBottom>
            Popular Ṭīkās (Commentaries) on Tarkasaṅgraha
          </Typography>

          <Typography className="my-2">
            The study of Tarkasaṅgraha is enhanced by a rich tradition of commentaries, including works like Dīpikā, Nyāyabodhinī, Nyāya-Siddhāntamuktāvalī. These commentaries explain difficult points, offer practical examples, and help students of all backgrounds move from basic definitions to advanced analysis.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Ṭīkā" size="small" color="primary" />
            <Chip label="#Dīpikā" size="small" color="secondary" />
            <Chip label="#Nyāyabodhinī" size="small" color="info" />
            <Chip label="#Bhāṣya" size="small" color="success" />
          </Box>

          {/* 7. Conclusion */}
          {divider}
          <Typography variant="h5" className="font-bold mb-2">
            Conclusion: Nyāya's Enduring Influence
          </Typography>
          <Typography className="my-2">
            Over centuries, Nyāya has played a central role in shaping Indian logical, philosophical, and educational traditions. Its integration with Vaiśeṣika, development into new analytic forms, and continued teaching through accessible texts like Tarkasaṅgraha ensure that Nyāya remains a living legacy of rational inquiry and debate.
          </Typography>
          <Box className="flex flex-wrap gap-2 justify-center mt-4">
            <Chip label="#Legacy" size="small" color="primary" />
            <Chip label="#Tradition" size="small" color="secondary" />
            <Chip label="#Vidyā" size="small" color="info" />
          </Box>
        </>
    </div>
  );
}
