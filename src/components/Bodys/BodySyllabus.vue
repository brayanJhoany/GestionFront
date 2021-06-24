<template>
  <v-container fluid>
    <Volver />
    <v-row>
      <v-col cols="12" md="2"> </v-col>
      <v-col cols="12" md="8">
        <v-card class="mt-13" color="info">
          <v-row>
            <v-col cols="12">
              <v-card-title class="headline text--center" primary-title>
                <div>
                  <strong class="blue--text letra">Syllabus</strong>
                </div>
                <v-spacer></v-spacer>
                <div style="text-align: right">
                  <v-btn
                    :small="$vuetify.breakpoint.lgAndDown ? true : false"
                    v-on="on"
                    fab
                    bottom
                    left
                    elevation="0"
                    color="info"
                  >
                  </v-btn>
                </div>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <section class="mt-6">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Número de creditos:
              </strong>
              <v-select
                :items="arrayCreditos"
                v-model="syllabus.nroCreditos"
                :disabled="booleanCreditos"
                class="ml-2"
              ></v-select>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="!booleanCreditos"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="booleanCreditos = false"
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="booleanCreditos"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        updateSyllabus();
                        booleanCreditos = true;
                      "
                    >
                      <v-icon color="warning"> far fa-save </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Guardar</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
        </section>
        <v-divider></v-divider>
        <section class="mt-4">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Áreas conocimiento
              </strong>
            </v-card-title>
            <v-card-title class="headline text--center" primary-title>
              <v-text-field
                v-model="syllabus.areaConocimiento"
                color="secondary"
                :disabled="booleanAreaConocimiento"
                :rules="[
                  (v) => !!v || 'Las áreas de conocimientos son requeridas',
                  (v) =>
                    /^[a-zA-Z\u00f1\u00d1 ]+$/.test(v) ||
                    'Las áreas de conocimientos solo puede contener letras y espacios.',
                ]"
              ></v-text-field>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="!booleanAreaConocimiento"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="booleanAreaConocimiento = false"
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="booleanAreaConocimiento"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        updateSyllabus();
                        booleanAreaConocimiento = true;
                      "
                    >
                      <v-icon color="warning"> far fa-save </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Guardar</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
        </section>
        <v-divider></v-divider>
        <section class="mt-4">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%">Semestre: </strong>
              <v-select
                :items="arraySemestre"
                v-model="syllabus.semestre"
                :disabled="booleanSemestre"
                class="ml-2"
              ></v-select>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="!booleanSemestre"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="booleanSemestre = false"
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="booleanSemestre"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        updateSyllabus();
                        booleanSemestre = true;
                      "
                    >
                      <v-icon color="warning"> far fa-save </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Guardar</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
        </section>
        <v-divider></v-divider>
        <section class="mt-4">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%">Requisitos</strong>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="dialogAgregarRequisito = true"
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir requisito</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
          <v-list>
            <v-list-item
              v-for="(requisito, i) in syllabus.preRequisito.cursoIds"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>{{
                  obtenerNombreCurso(requisito)
                }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarDatoseditarRequisito(
                          obtenerNombreCurso(requisito),
                          i
                        )
                      "
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
              </v-list-item-action>
              <v-list-item-action>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="cargarDatosEliminarRequisito(i)"
                    >
                      <v-icon color="warning"> fas fa-trash-alt </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Eliminar</strong></span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Unidad Responsable de la Construcción del Syllabus
              </strong>
            </v-card-title>
            <v-card-title class="headline text--center" primary-title>
              <v-text-field
                v-model="syllabus.responsableSyllabus"
                color="secondary"
                :disabled="booleanResponsableSyllabus"
                :rules="[
                  (v) => !!v || 'Las áreas de conocimientos son requeridas',
                ]"
              ></v-text-field>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="!booleanResponsableSyllabus"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="booleanResponsableSyllabus = false"
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="booleanResponsableSyllabus"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        updateSyllabus();
                        booleanResponsableSyllabus = true;
                      "
                    >
                      <v-icon color="warning"> far fa-save </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Guardar</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0" class="mb-2">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Competencias del perfil de egreso</strong
              >
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="
                        cargarDatosDialogFullScreen(
                          'Agregar competencia',
                          'competencias',
                          'Competencia'
                        )
                      "
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir competencia</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
          <v-col
            v-for="(competencia, i) in syllabus.competencia"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card class="mb-1">
              <div style="text-align: right" class="pt-1 mb-1">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEditarDatosDialogFullScreen(
                          'Editar competencia',
                          'competencias',
                          'Competencia',
                          competencia,
                          i
                        )
                      "
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEliminarDialogOpciones(
                          'competencia',
                          'competencias',
                          'la competencia',
                          competencia,
                          i
                        )
                      "
                    >
                      <v-icon color="warning"> fas fa-trash-alt </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Eliminar</strong></span>
                </v-tooltip>
              </div>
              <v-container style="background-color: white; padding: 5px">
                <v-row style="margin: 0; padding: 0">
                  <v-col cols="12">
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ competencia }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0" class="mb-2">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%">Aprendizajes</strong>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="
                        cargarDatosDialogFullScreen(
                          'Agregar aprendizajes',
                          'aprendizajes',
                          'Aprendizaje'
                        )
                      "
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir aprendizaje</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
          <v-col
            v-for="(aprendizaje, i) in syllabus.aprendizaje"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card class="mb-1">
              <div style="text-align: right" class="pt-1 mb-1">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEditarDatosDialogFullScreen(
                          'Editar aprendizaje',
                          'aprendizajes',
                          'Aprendizaje',
                          aprendizaje,
                          i
                        )
                      "
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEliminarDialogOpciones(
                          'aprendizaje',
                          'aprendizajes',
                          'el aprendizaje',
                          aprendizaje,
                          i
                        )
                      "
                    >
                      <v-icon color="warning"> fas fa-trash-alt </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Eliminar</strong></span>
                </v-tooltip>
              </div>
              <v-container style="background-color: white; padding: 5px">
                <v-row style="margin: 0; padding: 0">
                  <v-col cols="12">
                    <div
                      class="DIV mb-2"
                      style="overflow: auto; font-size: 90%"
                    >
                      {{ aprendizaje }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0" class="mb-2">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Unidades de aprendizajes y saberes esenciales</strong
              >
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="
                        cargarDatosDialogFullScreen(
                          'Agregar unidad',
                          'unidades',
                          'Unidad'
                        )
                      "
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir Unidad</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
          <v-col
            v-for="(unidad, i) in syllabus.unidad"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card class="mb-1">
              <div style="text-align: right" class="pt-1 mb-1">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEditarDatosDialogFullScreen(
                          'Editar unidad',
                          'unidades',
                          'Unidad',
                          unidad,
                          i
                        )
                      "
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEliminarDialogOpciones(
                          'unidad',
                          'unidades',
                          'la unidad',
                          unidad,
                          i
                        )
                      "
                    >
                      <v-icon color="warning"> fas fa-trash-alt </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Eliminar</strong></span>
                </v-tooltip>
              </div>
              <v-container style="background-color: white; padding: 5px">
                <v-row style="margin: 0; padding: 0">
                  <v-col cols="12">
                    <div
                      class="DIV mb-2"
                      style="overflow: auto; font-size: 90%"
                    >
                      {{ unidad }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%"
                >Metodología a utilizar
              </strong>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="!booleanMetodogia"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="booleanMetodogia = false"
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      :disabled="booleanMetodogia"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        updateSyllabus();
                        booleanMetodogia = true;
                      "
                    >
                      <v-icon color="warning"> far fa-save </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Guardar</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
            <v-card-title class="headline text--center" primary-title>
              <v-textarea
                v-model="syllabus.metodologia"
                :disabled="booleanMetodogia"
                color="secondary"
                auto-grow
              ></v-textarea>
            </v-card-title>
          </v-card>
        </section>
        <v-divider></v-divider>
        <section class="mt-6">
          <v-card elevation="0" class="mb-2">
            <v-card-title class="headline text--center" primary-title>
              <strong class="" style="font-size: 90%">Bibliografia</strong>
              <v-spacer></v-spacer>
              <div style="text-align: right">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :small="$vuetify.breakpoint.lgAndDown ? true : false"
                      v-on="on"
                      fab
                      bottom
                      left
                      color="accent"
                      @click="
                        cargarDatosDialogFullScreen(
                          'Agregar bibliografia',
                          'bibliografia',
                          'Bibliografia'
                        )
                      "
                    >
                      <v-icon color="white">fas fa-plus</v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Añadir Bibliografia</strong></span>
                </v-tooltip>
              </div>
            </v-card-title>
          </v-card>
          <v-col
            v-for="(bibliografia, i) in syllabus.bibliografia"
            :key="i"
            class=""
            style="padding: 0px"
          >
            <v-card class="mb-1">
              <div style="text-align: right" class="pt-1 mb-1">
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEditarDatosDialogFullScreen(
                          'Editar bibliografia',
                          'bibliografia',
                          'Bibliografia',
                          bibliografia,
                          i
                        )
                      "
                    >
                      <v-icon color="primary"> fas fa-edit </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Editar</strong></span>
                </v-tooltip>
                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      color="white"
                      fab
                      small
                      depressed
                      class="mr-2 py-2"
                      @click="
                        cargarEliminarDialogOpciones(
                          'bibliografia',
                          'bibliografia',
                          'la bibliografia',
                          bibliografia,
                          i
                        )
                      "
                    >
                      <v-icon color="warning"> fas fa-trash-alt </v-icon>
                    </v-btn>
                  </template>
                  <span><strong>Eliminar</strong></span>
                </v-tooltip>
              </div>
              <v-container style="background-color: white; padding: 5px">
                <v-row style="margin: 0; padding: 0">
                  <v-col cols="12">
                    <div
                      class="DIV mb-2"
                      style="height: 80px; overflow: auto; font-size: 90%"
                    >
                      {{ bibliografia }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </section>
      </v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
    <!--dialogs-->
    <v-dialog v-model="dialogAgregarRequisito" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Agregar requisito</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_añadirRequisito"
            style="margin: 0; padding: 0"
            v-model="form_añadirRequisitodValido"
            lazy-validation
          >
            <v-select
              v-model="selectedRequisito"
              :items="allCursosAux"
              label="Curso requisito"
              :rules="[(v) => !!v || 'Curso requisito es requerido']"
            ></v-select>
            <div class="pb-1" style="text-align: right">
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="warning"
                @click="dialogAgregarRequisito = false"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :disabled="!form_añadirRequisitodValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                @click="agregarRequisito(selectedRequisito)"
              >
                <h4 class="white--text">Agregar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEditarRequisito" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Editar actividad</h5>
        </v-card-title>
        <v-container class="px-5 mt-5">
          <v-form
            ref="form_editarRequisito"
            style="margin: 0; padding: 0"
            v-model="form_editarRequisitodValido"
            lazy-validation
          >
            <v-text-field
              v-model="editarRequisito.nombre"
              color="secondary"
              label="Curso requisito"
              :rules="[
                (v) => !!v || 'Curso requisito es requerido',
                (v) =>
                  /^[a-zA-Z\u00f1\u00d1 ]+$/.test(v) ||
                  'Curso requisito solo puede contener letras y espacios.',
              ]"
            ></v-text-field>

            <div class="pb-1" style="text-align: right">
              <v-btn
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="warning"
                @click="dialogEditarRequisito = false"
              >
                <h4 class="white--text">Cancelar</h4>
              </v-btn>
              <v-btn
                :disabled="!form_editarRequisitodValido"
                :small="$vuetify.breakpoint.smAndDown ? true : false"
                rounded
                color="secondary"
                class="ml-2"
                :loading="cargando"
                @click="dialogEditarRequisito = false"
              >
                <h4 class="white--text">Agregar</h4>
              </v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEliminarRequisito" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500px">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">Eliminar requisito</h5>
        </v-card-title>

        <v-card-title
          class="text-justify"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'font-size: 90%;'
              : 'font-size: 100%;'
          "
          >Esta seguro que desea eliminar el requisito?</v-card-title
        >
        <div class="px-5 mt-5 pb-4" style="text-align: right">
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="warning"
            @click="dialogEliminarRequisito = false"
          >
            <h4 class="white--text">Cancelar</h4>
          </v-btn>
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="secondary"
            class="ml-2"
            @click="eliminarRequisito"
          >
            <h4 class="white--text">Eliminar</h4>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- Dialog full screen -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click="dialog = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-toolbar-title>{{ tituloDialogFullScreen }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="guardarDatosDialogFullScreen"> Guardar </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-row>
          <v-col cols="12" md="2"> </v-col>
          <v-col cols="12" md="8" class="mt-5">
            <v-textarea
              v-model="infoDialogFullScreen"
              color="secondary"
              :label="labelDialogFullScreen"
              auto-grow
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="2"> </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEliminarOpciones" persistent max-width="500px">
      <v-card class="mx-auto" max-width="500px">
        <v-card-title class="headline primary text--center" primary-title>
          <h5 class="white--text">
            Eliminar {{ tituloDialogEliminarOpciones }}
          </h5>
        </v-card-title>

        <v-card-title
          class="text-justify"
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'font-size: 90%;'
              : 'font-size: 100%;'
          "
          >Esta seguro que desea eliminar
          {{ labelDialogEliminarOpciones }}?</v-card-title
        >
        <div class="px-5 mt-5 pb-4" style="text-align: right">
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="warning"
            @click="dialogEliminarOpciones = false"
          >
            <h4 class="white--text">Cancelar</h4>
          </v-btn>
          <v-btn
            :small="$vuetify.breakpoint.smAndDown ? true : false"
            rounded
            color="secondary"
            class="ml-2"
            @click="eliminarDatosDialogOpciones()"
          >
            <h4 class="white--text">Eliminar</h4>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Volver from "@/components/Globales/Volver.vue";
import { mapState, mapMutations } from "vuex";

import axios from "axios";
export default {
  components: {
    Volver,
  },
  name: "Syllabus",
  data() {
    return {
      selectedRequisito: "",
      //la variable syllabus en la más importante de esta vista, dado que es la encagada de almacenar la información que se mostrará en todos los apartados de la vista.
      syllabus: {
        id: 0,
        nroCreditos: 1,
        areaConocimiento: "",
        semestre: 6,
        preRequisito: {
          cursoIds: [],
        },
        responsableSyllabus: "",
        competencia: [],
        aprendizaje: [],
        unidad: [],
        metodologia: "",
        bibliografia: [],
      },
      cargando: false,
      //opciones
      arrayCreditos: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      booleanCreditos: true,
      booleanAreaConocimiento: true,
      arraySemestre: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16],
      booleanSemestre: true,
      booleanResponsableSyllabus: true,
      booleanMetodogia: true,

      //dialogs requisitos
      idEliminarRequisito: 0,
      dialogAgregarRequisito: false,
      form_añadirRequisitodValido: true,
      dialogEditarRequisito: false,
      form_editarRequisitodValido: true,
      dialogEliminarRequisito: false,
      //dialogs competencias
      dialogAgregarCompetencia: false,
      form_añadirCompetenciaValido: true,
      dialogEditarCompetencia: false,
      form_editarCompetenciaValido: true,
      dialogEliminarCompetencia: false,
      //dialog aprendizajes
      dialogAgregarAprendizaje: false,
      form_añadirAprendizajeValido: true,
      dialogEditarAprendizaje: false,
      form_editarAprendizajeValido: true,
      dialogEliminarAprendizaje: false,
      //dialog unidades
      dialogAgregarUnidad: false,
      form_añadirUnidadValido: true,
      dialogEditarUnidad: false,
      form_editarUnidadValido: true,
      dialogEliminarUnidad: false,
      //dialog bibliografia
      dialogAgregarBibliografia: false,
      form_añadirBibliografiaValido: true,
      dialogEditarBibliografia: false,
      form_editarBibliografiaValido: true,
      dialogEliminarBibliografia: false,
      //variables editar
      editarRequisito: {
        id: "",
        nombre: "",
      },
      editarCompetencia: {
        id: "",
        competencia: "",
      },
      editarAprendizaje: {
        id: "",
        aprendizaje: "",
      },
      editarUnidad: {
        id: "",
        unidad: "",
      },
      editarBibliografia: {
        id: "",
        bibliografia: "",
      },
      //dialog full screen
      dialog: false,
      tituloDialogFullScreen: "Titulo",
      tipoDialogFullScreen: "competencia",
      labelDialogFullScreen: "",
      infoDialogFullScreen: "",
      idItemEliminar: -1,
      //dialog opciones
      dialogEliminarOpciones: false,
      tituloDialogEliminarOpciones: "",
      tipoDialogEliminarOpciones: "",
      labelDialogEliminarOpciones: "",
      //allcursos
      allCursos: [],
      allCursosAux: [],
      //requisitos aux
      requisitosAux: [],
    };
  },
  /**
   * utilizando el ciclo de vida de vue, se ejecuta antes de que la vista se monte las funciones obtenerCursos y obtenerSyllabus
   */
  beforeMount() {
    this.obtenerCursos();
    this.obtenerSyllabus();
  },
  computed: {
    /**
     * Método computado que proviene de VUEX encargado de obtener el usuario desde la store
     */
    getUserValido() {
      return this.$store.getters.usuario;
    },
  },
  methods: {
    click() {
      console.log("Se realizo un click en el boton");
    },
    /**
     * Método encargado de agregar un nuevo requisito en el la variable syllabus, además de direccionar al método updateSyllabus que se encargará de enviar esa nueva información
     * al endPoint que corresponde
     */
    agregarRequisito(requisito) {
      for (let index = 0; index < this.allCursos.length; index++) {
        const element = this.allCursos[index];
        if (element.nombre == requisito) {
          this.syllabus.preRequisito.cursoIds =
            this.syllabus.preRequisito.cursoIds.length > 0
              ? [...this.syllabus.preRequisito.cursoIds, element.id]
              : [element.id];
        }
      }
      this.selectedRequisito = "";
      //console.log(this.syllabus.preRequisito.cursoIds);
      this.updateSyllabus();
      this.dialogAgregarRequisito = false;
    },
    /**
     * Metodo encargado de obtener todos los cursos  y almacernalos en la variables allcursos.
     */
    obtenerCursos() {
      var usuario = this.getUserValido;
      //console.log(usuario);
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/allcursos";
      //console.log(url);
      axios
        .get(url)
        .then((result) => {
          const response = result.data;
          if (response.error === false) {
            const cursos = response.cursos;
            for (let index = 0; index < cursos.length; index += 1) {
              const element = cursos[index];
              this.allCursosAux =
                this.allCursosAux.length > 0
                  ? [...this.allCursosAux, element.nombre]
                  : [element.nombre];
              const curso = {
                id: element.id,
                nombre: element.nombre,
              };
              this.allCursos =
                this.allCursos.length > 0
                  ? [...this.allCursos, curso]
                  : [curso];
            }
            console.log(this.allCursos);
          }
        })
        .catch((error) => {
          console.log("error");
        });
    },

    /**
     * Método encargado de retornar el nombre de un curso dado la id de este.
     */
    obtenerNombreCurso(idCurso) {
      var nombreCurso = " ";
      for (let index = 0; index < this.allCursos.length; index++) {
        const element = this.allCursos[index];
        if (idCurso == element.id) {
          nombreCurso = element.nombre;
        }
      }
      return nombreCurso;
    },

    /**
     * Método encargado de obtener toda la información del syllabus en la base de datos y alamacenarlos en la variable local de syllabus, para poder visaulizarla.
     */
    obtenerSyllabus() {
      var usuario = this.getUserValido;
      var curso = this.$route.params.id;
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        curso +
        "/syllabus";
      axios
        .get(url)
        .then((result) => {
          const response = result.data;
          console.log(response);
          this.syllabus.id = response.id;
          this.syllabus.nroCreditos = response.nroCreditos;
          this.syllabus.areaConocimiento = response.areaconocimiento;
          this.syllabus.semestre = response.semestre;
          //this.syllabus.preRequisito.cursoIds = response.preRequisito.cursoIds;
          this.syllabus.preRequisito.cursoIds =
            response.preRequisito[0].cursoIds;
          this.syllabus.responsableSyllabus = response.responsableSyllabus;
          this.syllabus.competencia = response.competencia;
          this.syllabus.aprendizaje = response.aprendizaje;
          this.syllabus.unidad = response.unidad;
          this.syllabus.metodologia = response.metodologia;
          this.syllabus.bibliografia = response.bibliografia;
        })
        .catch((error) => {
          console.log("error");
        });
    },

    /**
     * Método encargado de actualizar la información del syllabus mediante el endpoint correspondiente, y actualizar la información en la vista.
     */
    updateSyllabus() {
      var usuario = this.getUserValido;
      var curso = this.$route.params.id;
      const url =
        this.$store.state.rutaDinamica +
        "profesor/" +
        usuario.id +
        "/curso/" +
        curso +
        "/syllabus/" +
        this.syllabus.id;
      const request = {
        id: this.syllabus.id,
        nroCreditos: this.syllabus.nroCreditos,
        areaConocimiento: this.syllabus.areaConocimiento,
        semestre: this.syllabus.semestre,
        preRequisito: [
          {
            cursoIds: this.syllabus.preRequisito.cursoIds,
          },
        ],
        responsableSyllabus: this.syllabus.responsableSyllabus,
        competencia: this.syllabus.competencia,
        aprendizaje: this.syllabus.aprendizaje,
        unidad: this.syllabus.unidad,
        metodologia: this.syllabus.metodologia,
        bibliografia: this.syllabus.bibliografia,
      };
      //console.log(this.syllabus.areaConocimiento);
      //console.log(request);
      axios
        .put(url, request, this.$store.state.config)
        .then((result) => {
          const response = result.data;
          console.log(response);
          this.syllabus.id = response.id;
          this.syllabus.nroCreditos = response.nroCreditos;
          this.syllabus.areaConocimiento = response.areaconocimiento;
          this.syllabus.semestre = response.semestre;
          this.syllabus.preRequisito.cursoIds =
            response.preRequisito[0].cursoIds;
          this.syllabus.responsableSyllabus = response.responsableSyllabus;
          this.syllabus.competencia = response.competencia;
          this.syllabus.aprendizaje = response.aprendizaje;
          this.syllabus.unidad = response.unidad;
          this.syllabus.metodologia = response.metodologia;
          this.syllabus.bibliografia = response.bibliografia;
          console.log(this.syllabus.preRequisito.cursoIds);
        })
        .catch((error) => {
          console.log("error");
        });
    },

    /**
     * Método encargado en cargar la información del requisito que se quiere editar.
     */
    cargarDatoseditarRequisito(r, i) {
      this.editarRequisito.id = i;
      this.editarRequisito.nombre = r;
      this.dialogEditarRequisito = true;
    },

    /**
     * Método encargado de cargar los datos eliminados del requisito que se quiere eliminar.
     */
    cargarDatosEliminarRequisito(i) {
      this.idEliminarRequisito = i;
      this.dialogEliminarRequisito = true;
    },

    /**
     * Método encargado de cargar los datos según la opción que corresponda en el dialog full screen de la aplicación.
     */
    cargarDatosDialogFullScreen(titulo, tipo, label) {
      this.tituloDialogFullScreen = titulo;
      this.tipoDialogFullScreen = tipo;
      this.labelDialogFullScreen = label;
      this.infoDialogFullScreen = "";
      this.dialog = true;
    },

    /**
     * Método encargado de cargar los datos del elemento que se quiera editar según la opción en el dialog full screen de la aplicación.
     */
    cargarEditarDatosDialogFullScreen(titulo, tipo, label, item, idItem) {
      this.tituloDialogFullScreen = titulo;
      this.tipoDialogFullScreen = tipo;
      this.labelDialogFullScreen = label;
      const idItemEditar = idItem;
      if (this.tipoDialogFullScreen == "competencias") {
        this.infoDialogFullScreen = item;
      } else if (this.tipoDialogFullScreen == "aprendizajes") {
        this.infoDialogFullScreen = item;
      } else if (this.tipoDialogFullScreen == "unidades") {
        this.infoDialogFullScreen = item;
      } else if (this.tipoDialogFullScreen == "bibliografia") {
        this.infoDialogFullScreen = item;
      }
      this.dialog = true;
    },

    /**
     * Método encargado de cargar los datos del elemento que se quiera eliminar según la opción.
     */
    cargarEliminarDialogOpciones(titulo, tipo, label, item, idItemEliminar) {
      this.tituloDialogEliminarOpciones = titulo;
      this.tipoDialogEliminarOpciones = tipo;
      this.labelDialogEliminarOpciones = label;
      this.idItemEliminar = idItemEliminar;
      this.dialogEliminarOpciones = true;
    },

    /**
     * Método encargado de guardar la información que se encuentra en el dialog full screen, además de direccionar al método updateSyllabus que se encargará de enviar esa nueva información
     * al endPoint que corresponde
     */
    guardarDatosDialogFullScreen() {
      if (this.tipoDialogFullScreen == "competencias") {
        this.syllabus.competencia =
          this.syllabus.competencia.length > 0
            ? [...this.syllabus.competencia, this.infoDialogFullScreen]
            : [this.infoDialogFullScreen];
      } else if (this.tipoDialogFullScreen == "aprendizajes") {
        this.syllabus.aprendizaje =
          this.syllabus.competencia.length > 0
            ? [...this.syllabus.aprendizaje, this.infoDialogFullScreen]
            : [this.infoDialogFullScreen];
      } else if (this.tipoDialogFullScreen == "unidades") {
        this.syllabus.unidad =
          this.syllabus.competencia.length > 0
            ? [...this.syllabus.unidad, this.infoDialogFullScreen]
            : [this.infoDialogFullScreen];
      } else if (this.tipoDialogFullScreen == "bibliografia") {
        this.syllabus.bibliografia =
          this.syllabus.competencia.length > 0
            ? [...this.syllabus.bibliografia, this.infoDialogFullScreen]
            : [this.infoDialogFullScreen];
      }
      this.updateSyllabus();
      this.dialog = false;
    },

    /**
     * Método encargado de eliminar los datos del elemento que se quiera eliminar según la opción en la variable local syllabus, además de direccionar al método updateSyllabus que se encargará de enviar esa nueva información
     * al endPoint que corresponde.
     */
    eliminarDatosDialogOpciones() {
      var auxArrayEliminar = [];
      if (this.tipoDialogEliminarOpciones == "competencias") {
        for (let index = 0; index < this.syllabus.competencia.length; index++) {
          const element = this.syllabus.competencia[index];
          if (index != this.idItemEliminar) {
            auxArrayEliminar =
              auxArrayEliminar.length > 0
                ? [...auxArrayEliminar, element]
                : [element];
          }
        }
        this.syllabus.competencia = auxArrayEliminar;
      } else if (this.tipoDialogEliminarOpciones == "aprendizajes") {
        for (let index = 0; index < this.syllabus.aprendizaje.length; index++) {
          const element = this.syllabus.aprendizaje[index];
          if (index != this.idItemEliminar) {
            auxArrayEliminar =
              auxArrayEliminar.length > 0
                ? [...auxArrayEliminar, element]
                : [element];
          }
        }
        this.syllabus.aprendizaje = auxArrayEliminar;
      } else if (this.tipoDialogEliminarOpciones == "unidades") {
        for (let index = 0; index < this.syllabus.unidad.length; index++) {
          const element = this.syllabus.unidad[index];
          if (index != this.idItemEliminar) {
            auxArrayEliminar =
              auxArrayEliminar.length > 0
                ? [...auxArrayEliminar, element]
                : [element];
          }
        }
        this.syllabus.unidad = auxArrayEliminar;
      } else if (this.tipoDialogEliminarOpciones == "bibliografia") {
        for (
          let index = 0;
          index < this.syllabus.bibliografia.length;
          index++
        ) {
          const element = this.syllabus.bibliografia[index];
          if (index != this.idItemEliminar) {
            auxArrayEliminar =
              auxArrayEliminar.length > 0
                ? [...auxArrayEliminar, element]
                : [element];
          }
        }
        this.syllabus.bibliografia = auxArrayEliminar;
      }
      this.updateSyllabus();
      this.dialogEliminarOpciones = false;
    },

    /**
     * Método encargado de eliminar el requisito que se desea eliminar en la variable local syllabus, además de direccionar al método updateSyllabus que se encargará de enviar esa nueva información
     * al endPoint que corresponde.
     */
    eliminarRequisito() {
      var auxCursosIds = [];
      for (
        let index = 0;
        index < this.syllabus.preRequisito.cursoIds.length;
        index++
      ) {
        const element = this.syllabus.preRequisito.cursoIds[index];
        if (element != this.idEliminarRequisito) {
          auxCursosIds =
            auxCursosIds.length > 0 ? [...auxCursosIds, element] : [element];
        }
      }
      this.syllabus.preRequisito.cursoIds = auxCursosIds;
      this.dialogEliminarRequisito = false;
      this.updateSyllabus();
    },
  },
};
</script>

<style scoped>
.difuminado {
  text-shadow: #555 2px 2px 3px;
}
.letra {
  font-size: 125%;
}

.borde {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-style: solid;
  border-color: color;
}
.DIV {
  padding: 10px;
}
</style>
