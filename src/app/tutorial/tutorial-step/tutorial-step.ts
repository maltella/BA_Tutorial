import { Component, inject, Input } from '@angular/core';
import { TutorialStep } from '../../models/tutorial-step';
import { TutorialService } from '../../services/tutorial.service';
import { tutorialSteps } from '../../models/tutorial-steps';

@Component({
  selector: 'app-tutorial-step',
  imports: [],
  templateUrl: './tutorial-step.html',
  styleUrl: './tutorial-step.scss',
})
export class TutorialStepComponent {
  @Input() tutorialStep?: TutorialStep
  tutorialService = inject(TutorialService)
  success = false

  onNextClick() {
    this.success = false
    this.tutorialService.nextStep()
  }

  onSuccess() {
    this.success = true
  }
}
