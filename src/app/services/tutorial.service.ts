import { computed, inject, Injectable, signal } from '@angular/core';
import { TutorialStep } from '../models/tutorial-step';
import { tutorialSteps } from '../models/tutorial-steps';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  tutorialindex = signal(0);
  private returnIndex = signal(-1);
  private router = inject(Router)

  tutorialStepOrder = [
    'homeexpl',
    'textinputexpl',
    'textinputtask',
    'textinputmenuexpl',
    'voiceinputexpl',
    'voiceinputtask',
    'voiceinputmenuexpl',
    'audiochatexpl',
    'audiochattask',
    'audiochatmenuexpl',
    'plusmenuexpl',
    'plusmenutask',
    'plusmenumenuexpl',
    'vorherigechatsexpl',
    'vorherigechatstask',
    'vorherigechatsmenuexpl',
    //ab hier alle Tasks nochmal
    'einleitungabfrage',
    'textinputtask',
    'voiceinputtask',
    'audiochattask',
    'plusmenutask',
    'vorherigechatstask',
  ];

  currentStep = computed(() => {
    return tutorialSteps.find(
      (step) => step.id === this.tutorialStepOrder[this.tutorialindex()]
    );
  });

  canReturn = computed(() => this.returnIndex() >= 0);

  goToLinkedExplanation() {
    const step = this.currentStep();
    if (!step?.linkedExplanationId) return;

    const targetIndex = this.tutorialStepOrder.indexOf(step.linkedExplanationId);
    if (targetIndex === -1) return;

    this.returnIndex.set(this.tutorialindex());
    this.tutorialindex.set(targetIndex);
  }

  returnToTask() {
    if (this.returnIndex() <= 0) return;
    this.tutorialindex.set(this.returnIndex());
    this.returnIndex.set(-1);
  }

  nextStep() {
    this.tutorialindex.update((current) => current + 1);
    if(this.tutorialindex() >= this.tutorialStepOrder.length) {
      this.tutorialindex.set(0);
      this.returnIndex.set(0)
      this.router.navigate(['/done'])
    }
  }
}
