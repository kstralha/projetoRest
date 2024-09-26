import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {

  items = ['Frango a parmegiana', 'Contra filé', 'Milanesa', 'Bife à cavalo'];
  itens2 = ['Feijoada', 'Lasanha', 'Buchada de bode', 'Cuzcuz'];

  valueItem = ''; //cria o valueItem que será atribuído ao ngModel

  //------------------------------COMPONENTE1----------------------------------

  //necessário import ViewChild
  @ViewChild('newItem') comida: any;
  //o newitem é no html, a referência que vai chamar aqui no TS, e aqui pode ser o mesmo nome ou um qqr comida
  //vou usar um filho que vem da interface, chamado newitem
  //cria objeto da classe viewchild

  addNewItem(value: string) {
    //value vem da interface
    this.items.push(value); //adiciona no items, que já existe, mais um item
  }

  addNewOutroItem() {
    this.items.push(this.comida.nativeElement.value); //consegue ir lá buscar, não precisa de parametro
  }
  remove() {
    //define que comida que é um elemento nativo, passa a valer o que for definido
    this.comida.nativeElement.value = ' ';
  }

  removeItens() {
    while (this.items.length > 0) {
      this.items.pop(); //remove ultimo elemento
    }
  }
  //------------------------------COMPONENTE2----------------------------------

  addNewItem2() {
    if (this.valueItem === '') alert('valor inválido');
    else this.itens2.push(this.valueItem);
  }
  ///simplifica, pois não precisa identificar que o elemento é nativo, nem o value, nem viewChild. Simplesmente usa o módulo.

  remove2() {
    this.valueItem = '';
  }

  removeItens2() {
    while (this.itens2.length > 0) {
      this.itens2.pop(); //remove ultimo elemento
    }
  }
}
