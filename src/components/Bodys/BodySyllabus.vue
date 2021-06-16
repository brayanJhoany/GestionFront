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
                      @click="booleanCreditos = true"
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
                      @click="booleanAreaConocimiento = true"
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
                      @click="booleanSemestre = true"
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
              v-for="(requisito, i) in syllabus.preRequisito"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>{{ requisito }}</v-list-item-title>
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
                      @click="cargarDatoseditarRequisito(requisito, i)"
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
                      @click="booleanResponsableSyllabus = true"
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
                          'Aprendizajes',
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
                      @click="booleanMetodogia = true"
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
            <v-text-field
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
                :loading="cargando"
                @click="dialogAgregarRequisito = false"
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
            @click="click()"
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
            <v-btn text @click="dialog = false"> Guardar </v-btn>
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
            @click="click()"
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

export default {
  components: {
    Volver,
  },
  name: "Syllabus",
  data() {
    return {
      syllabus: {
        nroCreditos: 10,
        areaConocimiento: "Ingeniería y Tecnología",
        semestre: 6,
        preRequisito: ["algoritmos", "taller", "Proyecto de progra"],
        responsableSyllabus: "INGENIERIA CIVIL EN COMPUTACION",
        competencia: [
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
        ],
        aprendizaje: [
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
        ],
        unidad: [
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
        ],
        metodologia:
          " Clases teóricas o cátedras El propósito de este método es compartir conocimientos y activar procesos cognitivos. Se denomina como clase teórica una modalidad organizativa de la enseñanza en la que se utiliza principalmente como estrategia didáctica la exposición verbal por parte del profesor de los saberes que contempla el módulo. Aunque esta exposición se puede realizar de diversas formas y con distintos medios, la característica esencial de esta modalidad de enseñanza es su unidireccionalidad -hablar a los estudiantes- ya que tanto la selección de los saberes a exponer como la forma de hacerlo constituyen una decisión del profesor (De Miguel, 2005) Método socrático",
        bibliografia: [
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
          "Interactuar productivamente en los diferentes contextos organizacionales, privados y públicos, donde sea aplicable la ingeniería para ofrecer soluciones innovadoras a problemáticas en este ámbito",
        ],
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
      //dialog opciones
      dialogEliminarOpciones: false,
      tituloDialogEliminarOpciones: "",
      tipoDialogEliminarOpciones: "",
      labelDialogEliminarOpciones: "",
    };
  },
  methods: {
    click() {
      console.log("Se realizo un click en el boton");
    },
    cargarDatoseditarRequisito(r, i) {
      this.editarRequisito.id = i;
      this.editarRequisito.nombre = r;
      this.dialogEditarRequisito = true;
    },
    cargarDatosEliminarRequisito(i) {
      const idEliminarRequisito = i;
      this.dialogEliminarRequisito = true;
    },
    cargarDatosDialogFullScreen(titulo, tipo, label) {
      this.tituloDialogFullScreen = titulo;
      this.tipoDialogFullScreen = tipo;
      this.labelDialogFullScreen = label;
      if (this.tipoDialogFullScreen == "competencias") {
      } else if (this.tipoDialogFullScreen == "aprendizajes") {
      } else if (this.tipoDialogFullScreen == "unidades") {
      } else if (this.tipoDialogFullScreen == "bibliografia") {
      }
      this.dialog = true;
    },
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
    cargarEliminarDialogOpciones(titulo, tipo, label, item, idItemEliminar) {
      this.tituloDialogEliminarOpciones = titulo;
      this.tipoDialogEliminarOpciones = tipo;
      this.labelDialogEliminarOpciones = label;
      if (this.tipoDialogEliminarOpciones == "competencias") {
      } else if (this.tipoDialogEliminarOpciones == "aprendizajes") {
      } else if (this.tipoDialogEliminarOpciones == "unidades") {
      } else if (this.tipoDialogEliminarOpciones == "bibliografia") {
      }
      this.dialogEliminarOpciones = true;
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
