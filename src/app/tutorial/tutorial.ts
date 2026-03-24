import { Component, inject } from '@angular/core';
import { TutorialService } from '../services/tutorial.service';
import { TutorialStepComponent } from "./tutorial-step/tutorial-step";

@Component({
  selector: 'app-tutorial',
  imports: [TutorialStepComponent],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.scss',
})
export class Tutorial {
  private tutorialService = inject(TutorialService)
  currentStep = this.tutorialService.currentStep
}
