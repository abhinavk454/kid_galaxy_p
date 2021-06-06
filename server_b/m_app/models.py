from django.db import models

# model for input data


class Data_m(models.Model):
    datas = models.TextField()

    def __str__(self):
        return self.datas
