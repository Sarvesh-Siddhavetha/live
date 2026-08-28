import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Offering {
  index: string;
  title: string;
  description: string;
  detail: string;
}

interface Outcome {
  title: string;
  description: string;
}

interface ResearchArea {
  title: string;
  description: string;
}

@Component({
  selector: 'app-consulting-innovation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './consulting-innovation.html',
  styleUrl: './consulting-innovation.css'
})
export class ConsultingInnovationComponent {
  readonly offerings: Offering[] = [
    {
      index: '01',
      title: 'GCC Research & Validation',
      description: 'Transform community and indigenous knowledge into evidence the world can cite and use.',
      detail: 'Documentation, method, testing and validation are carried out with consent and named knowledge custodians.'
    },
    {
      index: '02',
      title: 'YEIKCA',
      description: 'Youth Empowerment, Indigenous Knowledge & Career Accelerator.',
      detail: 'A mentor-led pathway for young researchers to co-author, publish and present real work on the global stage.'
    },
    {
      index: '03',
      title: 'Campus Centre of Excellence',
      description: 'Bring a connected research, learning and career ecosystem to your institution.',
      detail: 'E-library access, webinars, workshops, scholarships, internships, career guidance and institutional visibility.'
    },
    {
      index: '04',
      title: 'Faculty & Student Development',
      description: 'Certification pathways that build research thinking before original research begins.',
      detail: 'Structured intensives and comprehensive programs across research, innovation, AI, ethics and indigenous knowledge.'
    },
    {
      index: '05',
      title: 'Publication & Conference Readiness',
      description: 'Move research from an idea to an abstract, paper, poster and confident presentation.',
      detail: 'Mentoring is aligned to indexed journals and established international scientific conferences.'
    },
    {
      index: '06',
      title: 'Institutional Research Partnerships',
      description: 'Build translational, patent-oriented research with GCC as an industry collaborator.',
      detail: 'For eligible Tamil Nadu government higher-education partners, the CMRG pathway can support GCC-mentored projects.'
    }
  ];

  readonly yeikcaOutcomes: Outcome[] = [
    { title: 'Youth Research Assistant', description: 'Become a recognised young researcher.' },
    { title: 'Confidence & EQ', description: 'Build emotional intelligence and resilience.' },
    { title: 'Publish papers', description: 'Co-author and publish in academic journals.' },
    { title: 'Patent ideas', description: 'Learn to identify and protect innovative ideas.' },
    { title: 'Work with scientists', description: 'Learn beside expert professors and mentors.' },
    { title: 'Global green entrepreneur', description: 'Develop conscious, globally relevant career pathways.' }
  ];

  readonly researchAreas: ResearchArea[] = [
    {
      title: 'Computational Drug Discovery',
      description: 'In-silico screening, molecular docking and molecular-dynamics simulation.'
    },
    {
      title: 'Network Pharmacology & Systems Biology',
      description: 'Multi-target mechanisms, ADMET profiling and polypharmacology.'
    },
    {
      title: 'Neuroscience & Neurodegeneration',
      description: 'Cognition, Alzheimer’s and gut–brain-axis modelling.'
    },
    {
      title: 'Cancer Biology & Oncology',
      description: 'Spatial transcriptomics, tumour microenvironment and therapy resistance.'
    },
    {
      title: 'Metabolic & Infectious Disease',
      description: 'Research spanning diabetes, liver disease and pandemic preparedness.'
    },
    {
      title: 'Natural-Product Pharmacology',
      description: 'Evidence-based validation of medicinal plants through modern biology.'
    }
  ];
}
