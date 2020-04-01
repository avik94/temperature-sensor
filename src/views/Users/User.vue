<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="tableData" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }" style="padding:20px;">
                        <v-btn color="primary" dark class="mb-2" v-on="on" @click = "newItem">New Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field label="Name" v-model="name"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Phone Number" v-model="phone"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Email" v-model="email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Gate Id" v-model="gateId"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Zone Id" v-model="zoneId"></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <!-- edit delete start here -->
        <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts" src = "./User.ts">
</script>