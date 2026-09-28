import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

interface QuickFact {
  value: string;
  label: string;
}

interface NavLink {
  id: string;
  label: string;
}

interface Outcome {
  title: string;
  description: string;
  accent: string;
  icon: 'research' | 'brain' | 'publish' | 'patent' | 'scientists' | 'leaf';
}

interface ResearchArea {
  title: string;
  description: string;
  accent: string;
  icon: 'code' | 'network' | 'brain' | 'oncology' | 'disease' | 'flask';
}

interface Mentor {
  name: string;
  credential: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-consulting-innovation',
  standalone: true,
  imports: [],
  templateUrl: './consulting-innovation.html',
  styleUrl: './consulting-innovation.css'
})
export class ConsultingInnovationComponent {
  readonly quickFacts: QuickFact[] = [
    { value: '3', label: 'Research tracks' },
    { value: '6–9 mo', label: 'To first publication' },
    { value: '6', label: 'Research areas' },
    { value: '13', label: 'Published researchers' },
    { value: '8', label: 'Faculty mentors' }
  ];

  readonly pageNav: NavLink[] = [
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'tracks', label: 'Tracks & Fees' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'research-areas', label: 'Research Areas' },
    { id: 'proof', label: 'Proof' },
    { id: 'community', label: 'Community' },
    { id: 'faculty', label: 'Faculty' }
  ];

  activeTrainingTab = signal<'student' | 'faculty'>('student');
  readonly activeSection = signal<string>('outcomes');

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  setTrainingTab(tab: 'student' | 'faculty'): void {
    this.activeTrainingTab.set(tab);
  }

  jumpToSection(id: string, event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.pageNav
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  readonly yeikcaOutcomes: Outcome[] = [
    {
      title: 'Youth Research Assistant',
      description: 'Become a recognised young researcher.',
      accent: '#f45a0a',
      icon: 'research'
    },
    {
      title: 'Confidence & EQ',
      description: 'Build emotional intelligence and resilience.',
      accent: '#8fd116',
      icon: 'brain'
    },
    {
      title: 'Publish Papers',
      description: 'Co-author and publish in academic journals.',
      accent: '#102b66',
      icon: 'publish'
    },
    {
      title: 'Patent Ideas',
      description: 'Learn to protect innovative ideas.',
      accent: '#35ad1c',
      icon: 'patent'
    },
    {
      title: 'Work with Scientists',
      description: 'Learn beside expert professors & mentors.',
      accent: '#067ac3',
      icon: 'scientists'
    },
    {
      title: 'Global Green Entrepreneur',
      description: 'Automatic Conscious Global Citizen status.',
      accent: '#f18732',
      icon: 'leaf'
    }
  ];

  readonly researchAreas: ResearchArea[] = [
    {
      title: 'Computational Drug Discovery',
      description: 'In-silico screening, molecular docking and molecular-dynamics simulation to find drug candidates.',
      accent: '#f45a0a',
      icon: 'code'
    },
    {
      title: 'Network Pharmacology & Systems Biology',
      description: 'Multi-target mechanism, ADMET profiling and polypharmacology of bioactive compounds.',
      accent: '#3ead21',
      icon: 'network'
    },
    {
      title: 'Neuroscience & Neurodegeneration',
      description: 'Alzheimer’s, cognition and gut–brain-axis modelling of neuroactive molecules.',
      accent: '#91d317',
      icon: 'brain'
    },
    {
      title: 'Cancer Biology & Oncology',
      description: 'Spatial transcriptomics, tumour microenvironment and immunotherapy resistance.',
      accent: '#087bc3',
      icon: 'oncology'
    },
    {
      title: 'Metabolic & Infectious Disease',
      description: 'Type 2 diabetes, liver disease and pandemic-preparedness targets.',
      accent: '#101f72',
      icon: 'disease'
    },
    {
      title: 'Natural-Product Pharmacology',
      description: 'Evidence-based validation of medicinal plants through modern computational biology.',
      accent: '#f18732',
      icon: 'flask'
    }
  ];

  readonly mentors: Mentor[] = [
    {
      name: 'Dr. Shan Lakshmanan',
      credential: 'Harvard',
      role: 'Vice Chancellor & Founder',
      image: 'assets/images/faculty/shan-lakshmanan.png'
    },
    {
      name: 'Dr. Sailesh Rao',
      credential: 'Stanford',
      role: 'Board & Faculty — Climate',
      image: 'assets/images/faculty/sailesh-rao.png'
    },
    {
      name: 'Dr. Abhinav Aggarwal',
      credential: 'IIT',
      role: 'Sustainability & R&D',
      image: 'assets/images/faculty/abhinav-aggarwal.png'
    },
    {
      name: 'Okama Epke Brook',
      credential: 'CEO — Africa Caribbean Heritage Alliance (ACHA)',
      role: 'Women Empowerment',
      image: 'assets/images/faculty/okama-epke-brook.jpeg'
    },
    {
      name: 'Mrs. Abitha Venkataraman',
      credential: 'NIT',
      role: 'Chief Wellness Coach',
      image: 'assets/images/faculty/abitha-venkataraman.png'
    },
    {
      name: 'Dr. Shri Gupta',
      credential: 'Cornell',
      role: 'Program Director',
      image: 'assets/images/faculty/shri-gupta.png'
    },
    {
      name: 'Steven Maimon',
      credential: 'MIT',
      role: 'Sustainable Engineering',
      image: 'assets/images/faculty/steven-maimon.png'
    },
    {
      name: 'Stanley Underwood North',
      credential: 'Principal, Law Offices of Stanley Underwood North III, LLC',
      role: 'Education Abroad',
      image: 'assets/images/faculty/stanley-underwood-north.png'
    }
  ];
}
