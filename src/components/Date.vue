<template>
    <DatePicker v-model="range" mode="dateTime" :columns="2" is-range>
        <template v-slot="{inputValue, inputEvents}">
            <div class="group">
                <label class="button groupItem" butto for="start">Check-in</label>
                <input type="text" id="start" :value="inputValue.start" v-on="inputEvents.start" class="input groupItem">
                <label class="button groupItem" for="end">Check-out</label>
                <input type="text" id="end" :value="inputValue.end" readonly class="input groupItem">
            </div>
        </template>

    </DatePicker>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const date = ref(new Date())
date.value.setDate(Number(date.value.getDate()) + 35)
const range = reactive({
    start: new Date(),
    end: date.value,
})

</script>

<style lang="scss" scoped></style>