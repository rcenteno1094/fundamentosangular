import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoComponent } from './components/segundocomponent/segundocomponent';
import { TercerComponent } from './components/tercercomponent/tercercomponent';
import { EventosComponent } from './components/eventoscomponent/eventoscomponent';
import { DirectivasComponent } from './components/directivascomponent/directivascomponent';
import { NumerosEstilosComponent } from './components/numerosestiloscomponent/numerosestiloscomponent';
import { TestPruebasComponent } from './components/test-pruebas-component/test-pruebas-component';
import { FormSaludoComponent } from './components/form-saludo-component/form-saludo-component';
import { FormsModule } from '@angular/forms';
import { FormDobleComponent } from './components/form-doble-component/form-doble-component';
import { SumarNumerosComponent } from './components/sumar-numeros-component/sumar-numeros-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    SegundoComponent,
    TercerComponent,
    EventosComponent,
    DirectivasComponent,
    NumerosEstilosComponent,
    TestPruebasComponent,
    FormSaludoComponent,
    FormDobleComponent,
    SumarNumerosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
